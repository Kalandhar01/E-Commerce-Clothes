import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import userModel from '../models/userModel.js';

// Token creation function
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Controller functions

// Login route
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await userModel.findOne({ email });
        // console.log('User found:', user); // Debugging line

        if (!user) {
            return res.status(404).json({ success: false, message: "User Doesn't Exist" });
        }

        // Check password and return boolean
        const isMatch = await bcrypt.compare(password, user.password);
        // console.log('Input password:', password); // Debugging line
        // console.log('Hashed password:', user.password); // Debugging line

        if (isMatch) {
            const token = createToken(user._id);
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: "Invalid Info" });
        }

    } catch (error) {
        console.log("Error from Login:", error); // Adjusted log message
        res.status(500).json({ success: false, message: error.message });
    }
};


// Register route
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User Already Exists" });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please Enter a Valid Email" });
        }
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Please Enter a Strong Password" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        // Generate token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log("Error from Register:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Admin login route
const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)

            res.json({success:true, token})
        }
        else {
            res.json({success:false , message:"Invalid Infor"})
        }
        
    } catch (error) {
        console.log("Error from Register:", error);
        res.status(500).json({ success: false, message: error.message });
        
    }
   
};

export { adminLogin, loginUser, registerUser };

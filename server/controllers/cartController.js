//add product to user cart
import userModel from '../models/userModel.js';

const addToCart = async (req,res) =>{

    try{
        const { userId ,itemId ,size } = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if(cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId]={}
            cartData[itemId][size] = 1
        }


        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({success:true , message:"Added to cart"})

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Not added"})
    }
    
}


//update Cart
const updateCart = async (req,res) =>{

    try {
       const { userId ,itemId ,size ,quantity} = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        
        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({success:true , message:"Updated to cart"})




    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Not added"})
        
    }
}

//get user cartData
const getUserCart = async (req,res) =>{

    try {

        const { userId } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json( { success:true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Not added"})
        
    }

}


export { addToCart, getUserCart, updateCart };


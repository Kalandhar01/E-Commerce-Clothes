import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudnary.js';
// import connectCloudinary from './config/cloudinary.js'; // Fixed typo
import connectDB from './config/mongodb.js';
import productRouter from './routes/ProductRoute.js';
import userRouter from './routes/userRoutes.js';

// App config
const app = express();
const port = process.env.PORT || 1111;

// Connect to DB
connectDB();

// Connect to Cloudinary
connectCloudinary();


// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send("API WORKING");
});

// Start the server
app.listen(port, () => console.log('Server is Running on PORT:', port));

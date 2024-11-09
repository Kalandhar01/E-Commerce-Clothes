import express from 'express';
import { allOrders, placeOrder, placeOrderRaze, placeOrderStripe, updateStatus, userOrders, verifyRazorPay, verifyStripe } from '../controllers/order.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin routes

orderRouter.post('/list',allOrders);  // Added semicolon
orderRouter.post('/status', updateStatus);  // Added semicolon

// Payment routes
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRaze);

//verify payment 
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazor',authUser,verifyRazorPay)

// User routes
orderRouter.post('/userorders', userOrders);

export default orderRouter;

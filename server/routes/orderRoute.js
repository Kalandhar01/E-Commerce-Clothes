import express from 'express';
import { allOrders, placeOrder, placeOrderRaze, placeOrderStripe, updateStatus, userOrders } from '../controllers/order.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin routes
orderRouter.post('/list', adminAuth, allOrders);  // Added semicolon
orderRouter.post('/status', adminAuth, updateStatus);  // Added semicolon

// Payment routes
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRaze);

// User routes
orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;

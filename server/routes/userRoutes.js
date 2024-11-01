import express from 'express';
import { adminLogin, loginUser, registerUser } from '../controllers/userConroller.js';

const userRouter = express.Router();

// User routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

export default userRouter;

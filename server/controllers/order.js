import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

//placing order using COD methoed

const placeOrder = async (req, res) => {

    try {
        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })


    }
}

//placing order using Stripe
const placeOrderStripe = async (req, res) => {

}

//placing order using razor Pay
const placeOrderRaze = async (req, res)=>{

}

////display the orders on admin panel
const allOrders = async (req, res) => {

}

//user order data for Front
const userOrders = async (req, res) => {

    try {

        const {userId} = req.body;
        
        

        const orders = await orderModel.find({userId});
        console.log(orders);
        
        res.json(  {success : true, orders});
        
    } catch (error) {
        res.json({success:false, message:error.message})
    }

}


//update order Status only from admin
const updateStatus = async (req, res) => {

}

export { allOrders, placeOrder, placeOrderRaze, placeOrderStripe, updateStatus, userOrders };

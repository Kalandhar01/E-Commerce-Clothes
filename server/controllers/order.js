import { currency } from '../../admin/src/App.jsx';
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

//global 
const currency = 'inr'
const deliveryCharges = 10


//placing order using COD methoed


//GATEWAYE
import Stripe from 'stripe';
//STRIPE 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


const placeOrder = async (req, res) => {

    try {
        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Cod",
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
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency, // Ensure currency is defined
        product_data: {
          name: item.name, // Use item.name instead of item_data
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency, // Ensure currency is defined
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: deliveryCharges * 100, // Ensure deliveryCharges is defined
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`, // Use backticks
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`, // Corrected spelling of "false" and used backticks
      line_items,
      mode: 'payment',
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//placing order using razor Pay
const placeOrderRaze = async (req, res)=>{

}

////display the orders on admin panel
const allOrders = async (req, res) => {

  try {
    const orders = await orderModel.find({})
    res.json( {success:true , orders})
  } catch (error) {
    console.log(error)
        res.json({ success: false, message: error.message })

    
  }

}

//user order data for Front
// user order data for Front
const userOrders = async (req, res) => {
    try {
      const { userId } = req.body;
      const orders = await orderModel.find({ userId });
  
      res.json({ success: true, orders });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };
  

//update order Status only from admin
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    
    // Validate input
    if (!orderId || !status) {
      return res.json({ success: false, message: 'Order ID and status are required' });
    }

    const order = await orderModel.findByIdAndUpdate(orderId, { status });

    if (!order) {
      return res.json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, message: 'Status Updated' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { allOrders, placeOrder, placeOrderRaze, placeOrderStripe, updateStatus, userOrders };

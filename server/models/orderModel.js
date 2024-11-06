import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema( {
    userId : {type:String , required: true},
    items : {type:Array , required: true},
    amount : {type:Number , required: true},
    address : {type:Object , required: true},

    //it can be update from the admin
    status : {type: String , required: true, default:'Order Placed '},
    paymentMethoed : {type: String },
    payment : {type: Boolean , required: true, default :false},
    date:{type:Number, required:true}
})

const orderModel =mongoose.model('order',orderSchema);

export default orderModel;
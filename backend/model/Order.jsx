const mongoose = require('mongoose');
const Schema=mongoose.Schema

const Orderschema=new Schema({
    email:{
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false // Changed from true to false to prevent crash if not provided
    },
    orderData: [
        {
            orderDate: {
                type: Date,
                default: Date.now
            },
            items: {
                type: Array,
                required: true
            },
            status: {
                type: String,
                default: 'Pending'
            }
        }
    ]
}, { timestamps: true });

const Order=mongoose.model('Order', Orderschema);

module.exports = Order;


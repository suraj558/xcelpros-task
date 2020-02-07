const mongoose = require('mongoose')

const Schema = mongoose.Schema
const invoiceSchema = new Schema({
    bno: {
        type:String,
        required: true,
        unique:true
        
    },
    address: {
        type: String,
        required: true,
        
    },
    
    date: {
        type:  Date,
        default:Date.now()
        
    },
    qty:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    amnt:{
        type: Number,
        required: true,
    },
    
    total:{
        type: Number,
        required: true,
    }
    
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice

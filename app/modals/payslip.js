const mongoose = require('mongoose')

const Schema = mongoose.Schema
const payslipSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    desg: {
        type:String,
        required: true,
        
    },
    day:{
        type:Number,
        min:2,
        required:true
    },
    
    month: {
        type: String,
        min:2,
        required: true,
        
    },
    year:{
        type: Number,
        min:4,
        required: true,
    },
    basic:{
        type: Number,
        required: true,
    },
    hra:{
        type: Number,
        required: true,
    },
    conveyance:{
        type: Number,
        required: true,
    },
    pf:{
        type: Number,
        required: true,

    },
    total:{
        type: Number,
        required: true,
    },
    chno:{
        type: String,
        required: true,
        unique:true
    },
    bankname:{
        type: String,
        required: true,
    }
    
   
})

const Payslip = mongoose.model('Payslip', payslipSchema)

module.exports = Payslip

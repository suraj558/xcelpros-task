const mongoose = require('mongoose')

const Schema = mongoose.Schema
const facultySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desg: {
        type: String,
        required: true
    },
    dept:{
      type:String,
      required:true
    },
    
    performance: {
        type: String,
        required: true,
        
    },
    
    salary:{
        type: Number,
        required: true,
    }
    
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports = Faculty

const mongoose = require('mongoose')

const Schema = mongoose.Schema
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    
    semester: {
        type: String,
        required: true,
        
    },
    performance:{
        type: String,
        required: true,
    },
    fees:{
        type: Number,
        required: true,
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student

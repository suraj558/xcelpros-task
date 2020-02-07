const mongoose = require('mongoose')

const Schema = mongoose.Schema
const attendanceSchema = new Schema({
    name: {
        type:String,
        required: true,
        
    },
    course: {
        type: String,
        required: true,
        
    },
    
    semester: {
        type: String,
        required: true,
        
        
    },
    date:{
        type:Date,
        default:Date.now()
    },
    present:{
        type:String,
        enum:['yes','no'],
        required: true,
        description:'can have only these values'
    }
   
})

const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = Attendance

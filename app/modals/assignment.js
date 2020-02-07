const mongoose = require('mongoose')

const Schema = mongoose.Schema
const assignmentSchema = new Schema({
    name: {
        type: String,
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
    topic:{
        type:String,
        required: true,
    },
    date:{
        type: Date,
        default:Date.now()
    },
    duedate:{
      type:String,
      required:true
    }
   
})

const Assignment = mongoose.model('Assignment', assignmentSchema)

module.exports = Assignment

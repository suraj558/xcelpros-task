const mongoose = require('mongoose')

const Schema = mongoose.Schema
const studentmarksSchema = new Schema({
    name: {
        type:String,
        required: true,
        
        
    },
    course: {
        type:String,
        required: true,
    
        
    },
    
    semester: {
        type: String,
        required: true,
        
        
        
    },
    subjects:{
        type: Array,
        required: true,
    },
    marks:{
        type: Array,
        required: true,
    }
    
})

const Marks = mongoose.model('Marks', studentmarksSchema)

module.exports = Marks

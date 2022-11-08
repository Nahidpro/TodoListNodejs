const mongoose = require('mongoose')

const { Schema } = mongoose;
//scema for create new todo
const TodoSchema = Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    createdAt: {type: Date, default: Date.now},
   
})

// this is a  function for find todo by releted text
TodoSchema.methods ={
    SearchByKeyword: function (keyword) {
        return mongoose.model('Todo').find({title:new RegExp(keyword,'i')})
    }
}

module. exports = mongoose.model('Todo', TodoSchema);
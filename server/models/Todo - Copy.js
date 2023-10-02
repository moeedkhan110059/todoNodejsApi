const mongoose  = require('mongoose');
const TodosSchema= new mongoose.Schema({
    data: {
        type:String,
        required:true,
    },
    done: {
        type:Boolean,
        default:false,
    },
    createAt: {2
        type:Date,
        default:Date.now,
    },
})

const todos = mongoose.model('todos',TodosSchema);

module.exports = todos; 
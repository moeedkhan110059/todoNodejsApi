const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodosSchema = new Schema({
    data: {
        type:String,
        required:true,
    },
    done: {
        type:Boolean,
        default:false,
    },
    createAt: {
        type: Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('todo', TodosSchema);




















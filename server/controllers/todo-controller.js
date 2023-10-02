const Todo = require('../models/Todo');

const createTodo = async (req,res)=>{

    console.log(req)
    
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            date: Date.now
        });
        
        newTodo.save();
        return res.status(200).json(newTodos)
    } 
    catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteTodo = async (req,res)=>{

    console.log(req)
    
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            date: Date.now
        });
        
        newTodo.save();

        return res.status(200).json(newTodos)
    } 
    catch(error){
        return res.status(500).json(error.message);
    }
}


const updateTodo = async (req,res)=>{

    console.log(req)
    
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            date: Date.now
        });
        
        newTodo.save();

        return res.status(200).json(newTodos)
    } 
    catch(error){
        return res.status(500).json(error.message);
    }
   
}


module.exports = { createTodo, updateTodo, deleteTodo }




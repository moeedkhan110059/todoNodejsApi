const router = require('express').Router();
const TodoController  = require('../controllers/todo-controller');

// create to do
router.post('createTodo',TodoController.createTodo);
// create to do
router.put('updateTodo:id',TodoController.updateTodo);
// create to do
router.delete('deleteTodo:id',TodoController.deleteTodo);

module.exports=router;
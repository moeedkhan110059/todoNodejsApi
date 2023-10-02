import  express  from "express";
import { AddTodo } from "../controllers/todo-controller.js";




const route = express.Router();

// create to do
route.post('/todos',AddTodo);


export default route;
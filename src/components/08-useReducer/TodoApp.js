import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
export const TodoApp = () => {

    const init = ()=>{
       return JSON.parse(localStorage.getItem('todos')) || [];
    }

   
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
     }, [todos]);
 
     const handleToggle = (todoId)=>{
         dispatch({
             type:'toggle',
             payload: todoId
         });
     }

     const handleAddTodo =(newTodo) =>{
         dispatch({
            type: 'add',
            payload: newTodo
        });
     }
     const handleDelete =(todoId) =>{
        //crear la accion
        const action ={
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
     }
    
    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                
                    <TodoList todos={todos} 
                    handleDelete={handleDelete} 
                    handleToggle ={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd 
                    handleAddTodo ={handleAddTodo}/>
                </div>

            </div>
        </>
    )
}

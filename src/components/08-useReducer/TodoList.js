import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={i}
                        handleDelete={() => handleDelete(todo.id)}
                        handleToggle={() => handleToggle(todo.id)}
                    />
                ))
            }
        </ul>
    )
}

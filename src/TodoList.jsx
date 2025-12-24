import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";

const initialTodos = [
    {
        id: 1,
        text: "Walk the dog",
        completed: false,
    },
    {
        id: 2,
        text: "Wash the dishes",
        completed: true,
    },
    {
        id: 3,
        text: "Go holiday shopping",
        completed: false
    }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos(oldTodos => {
            return oldTodos.filter(t => t.id !== id);
        })
    }

    const toggleTodo = (id) => {
        setTodos(oldTodos => {
            return oldTodos.map(t => t.id === id ? {...t, completed: !t.completed} : t)
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id} 
                remove={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)}/>
            })}
        </List>
    )
}
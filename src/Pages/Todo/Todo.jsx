import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Title from "../../Components/Title/Title";

const Todo = () => {

    const [todos, setTodos] = useState([]);

    const addTask = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...todos]
        
        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
            <Title titletext="Whats the plan for today?" />
            <Input onSubmit={addTask} />
        </div>
    );
};

export default Todo;

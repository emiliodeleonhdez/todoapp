import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Title from "../../Components/Title/Title";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./Todo.scss";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTask = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const remove = (id) => {
        const removeTodo = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeTodo);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const allTodos = todos.map((todo) => (
        <div
            className={todo.isComplete ? "todo complete" : "todo"}
            key={todo.id}
        >
            <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>

            <div className="todo-icons">
                <div>
                    <RiCloseCircleLine onClick={() => remove(todo.id)} />
                </div>
                <div>
                    <TiEdit onClick={() => updateTodo(todo.id)} />
                </div>
            </div>
        </div>
    ));

    return (
        <div className="todo-app">
            <Title titletext="What's the plan for today?" />
            <Input onSubmit={addTask} />
            <div className="main-alltodos">{allTodos}</div>
        </div>
    );
};

export default Todo;

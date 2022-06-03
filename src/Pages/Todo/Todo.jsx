import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Title from "../../Components/Title/Title";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./Todo.scss";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);
    const [newText, setNewText] = useState("");

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

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleChange = (e) => {
        setNewText(e.target.value);
        console.log(newText)
    };

    const update = (e) => {
        e.preventDefault();
        const editText = todos.map((todo) => {
            if (todo.edit) {
                console.log("Value of new text", newText)
                todo.text = newText;
                todo.edit = false
                
            }
            setNewText("")
            return todo;
            
        });

        setTodos(editText);
    };

    const handleEdit = (id) => {
        setEdit(true);
        console.log(edit);
        const editTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.edit = !todo.edit;
            }
            console.log(todo)
            setEdit(!edit)
            console.log(todo)
            return todo;
        });

        setTodos(editTodo);
    };

    const allTodos = todos.map((todo) => (
        <div
            className={todo.isComplete ? "todo complete" : "todo"}
            key={todo.id}
        >
            <div onClick={() => completeTodo(todo.id)}>
                {todo.edit ? (
                    <form onSubmit={update}>
                        <input className="edit-input" placeholder="Edit task" value={newText} onChange={handleChange} />
                        <button className="edit-button" type="submit">✓</button>
                    </form>
                ) : (
                    todo.text
                )}
            </div>

            <div className="todo-icons">
                <div>
                    <RiCloseCircleLine onClick={() => remove(todo.id)} />
                </div>
                <div>
                    <TiEdit onClick={() => handleEdit(todo.id)} />
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

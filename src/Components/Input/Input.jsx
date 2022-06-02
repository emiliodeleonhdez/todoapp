import React, { useState } from "react";
import Button from "../Button/Button";
import "./Styles/Input.scss";

const Input = (props) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
        });

        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-todo"
                    placeholder="Add a task"
                    value={input}
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                />
                <Button type="submit" />
            </form>
        </div>
    );
};

export default Input;

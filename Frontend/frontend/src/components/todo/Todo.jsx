import React, { useState } from "react";
import "./todo.css";
import { ImPencil2, ImCross } from "react-icons/im";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const addTodo = () => {
    if (inputTitle.trim() && inputBody.trim()) {
      setTodos([...todos, { title: inputTitle, body: inputBody }]);
      setInputTitle("");
      setInputBody("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo">
      {/* Input bar fixed at top */}
      <div className="todo-inputs-div">
        <input
          type="text"
          className="todo-inputs"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="text"
          className="todo-inputs"
          placeholder="Body"
          value={inputBody}
          onChange={(e) => setInputBody(e.target.value)}
        />
        <button className="home-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      {/* Todo cards */}
      <div className="todo-body">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
            </div>
            <div>
              <button className="icon-btn">
                <ImPencil2 />
              </button>
              <button className="icon-btn" onClick={() => deleteTodo(index)}>
                <ImCross />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

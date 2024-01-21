import React, { useState } from "react";

const Todolist = ({ todo, toggleComplete, handleEdit, handleDelete }) => {

  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        type={"text"}
        className="list"
        style={{ textDecoration: todo.completed && "line-through" }}
        onChange={handleChange}
        value={todo.title === "" ? newTitle : todo.title}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <i className="fa-solid fa-circle-check" id="i"></i>
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <i className="fa-solid fa-pen-to-square" id="i"></i>{" "}
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <i className="fa-solid fa-trash" id="i"></i>
        </button>
      </div>
    </div>
  );
};

export default Todolist;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <form onSubmit={addTodoHandler} className="add-todo">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

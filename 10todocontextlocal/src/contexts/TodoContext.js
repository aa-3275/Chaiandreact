import { createContext, useState, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, text: "Learn React", completed: false }],
  addTodo: (text) => {},
  updatedTodo: (id, newText) => {},
  toggleTodo: (id) => {},
  removeTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

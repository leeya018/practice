import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: uuidv4(), text, completed: false }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleComplete,
  };
}

export default useTodo;

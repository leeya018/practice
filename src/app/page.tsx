"use client";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodo from "../hooks/useTodo";

export default function Home() {
  const { todos, addTodo, toggleComplete, removeTodo } = useTodo();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

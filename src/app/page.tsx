"use client";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodo from "../hooks/useTodo";

export default function Home() {
  const { todos, addTodo, toggleComplete, removeTodo } = useTodo();

  return (
    <div className="flex flex-col items-center w-screen h-[100vh]">
      <h1 className="flex justify-center mt-10 w-full text-lg font-bold">
        Todo List
      </h1>
      <div className="w-[40%]">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

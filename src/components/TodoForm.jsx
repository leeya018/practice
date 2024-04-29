import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        type="text"
        className="input border-2 border-black rounded-md p-2 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo..."
      />
    </form>
  );
}

export default TodoForm;

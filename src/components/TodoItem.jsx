function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div className="flex justify-between my-2">
      <span
        className={`${
          todo.completed ? "line-through" : "no-underline"
        }  flex items-center  flex-1`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button className="flex-1" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;

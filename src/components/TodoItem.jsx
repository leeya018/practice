function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;

function ToDo({ todo, removeTask, readyTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div className={todo.complete ? "item-text strike" : "item-text"}>
        {todo.task}
      </div>
      <div
        className="item-todo__btn item-ready"
        onClick={() => readyTask(todo.id)}
      >
        <div>✓</div>
      </div>
      <div
        className="item-todo__btn item-delete"
        onClick={() => removeTask(todo.id)}
      >
        <div>X</div>
      </div>
    </div>
  );
}

export default ToDo;

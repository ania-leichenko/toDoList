function ToDo({ todo, removeTask, readyTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
            <div className="item-ready" onClick={() => readyTask(todo.id)}>✓</div>
        </div>
    )
}

export default ToDo;
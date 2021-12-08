import { Draggable } from 'react-beautiful-dnd';

function ToDo({ todo, removeTask, readyTask, index }) {
 
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided) => (
        <div className="item-todo" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
      )}
    </Draggable>
    );
}

export default ToDo;

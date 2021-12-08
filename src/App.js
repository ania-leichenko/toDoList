import { useSelector, useDispatch } from "react-redux";
import ToDo from "./components/Todo";
import ToDoForm from "./components/TodoForm";
import { addTask, removeTask, readyTask, setTodos } from "./redux/todoSlice";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const addTaskHandler = (userInput) => {
    dispatch(addTask(userInput));
  };

  const removeTaskHandler = (id) => {
    dispatch(removeTask(id));
  };

  const readyTaskHandler = (id) => {
    dispatch(readyTask(id));
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(setTodos(items));
  }

  return (
    <div className="App">
      <header>
        <h1>To do: </h1>
      </header>
      <ToDoForm addTask={addTaskHandler} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
          <div className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
                <ToDo
                  todo={todo}
                  key={todo.id}
                  index={index}
                  removeTask={removeTaskHandler}
                  readyTask={readyTaskHandler}
                />
              ))}
              {provided.placeholder}
          </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;

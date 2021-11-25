import { useSelector, useDispatch } from "react-redux";
import ToDo from "./components/Todo";
import ToDoForm from "./components/TodoForm";
import { addTask, removeTask, readyTask } from "./redux/todoSlice";

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

  return (
    <div className="App">
      <header>
        <h1>To do: </h1>
      </header>
      <ToDoForm addTask={addTaskHandler} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTaskHandler}
            readyTask={readyTaskHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
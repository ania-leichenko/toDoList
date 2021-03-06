import { createSlice } from "@reduxjs/toolkit";

let todos = localStorage.getItem("state.todos");

todos = JSON.parse(todos);
if(!todos) {
  todos = []
}


export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos,
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload) {
        const newItem = {
          id: Math.random().toString(36).substr(2, 9),
          task: action.payload,
          complete: false,
        };
        state.todos = [...state.todos, newItem];
        localStorage.setItem("state.todos", JSON.stringify(state.todos));
      }
    },
    removeTask: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.todos = [
          ...state.todos.filter((todo) => todo.id !== action.payload),
        ];
      }
      localStorage.setItem("state.todos", JSON.stringify(state.todos));
    },
    readyTask: (state, action) => {
      if (action.payload) {
        state.todos = [
          ...state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, complete: !todo.complete }
              : { ...todo }
          ),
        ];
      }
      localStorage.setItem("state.todos", JSON.stringify(state.todos));
    },
    setTodos: (state, action) => {
      state.todos = action.payload
    },
  },
});

export const { addTask, removeTask, readyTask, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
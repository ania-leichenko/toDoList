import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    userInput: "",
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
      }
    },
    removeTask: (state, action) => {
        console.log(action)
        if(action.payload) {
            state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)];
        }
    },
    readyTask: (state, action) => {
        if(action.payload) {
            state.todos =[...state.todos.map((todo) => todo.id === action.payload ? { ...todo, complete: !todo.complete } : { ...todo }),];  
        }
    },
  },
});

export const { addTask, removeTask, readyTask } = todoSlice.actions;

export default todoSlice.reducer;
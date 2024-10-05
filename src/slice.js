import { createSlice, nanoid } from '@reduxjs/toolkit'

let initialState = {
    todos: [{}, {}, {}, {}, {}]
}

let slice = createSlice({
    name: "ToDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newToDo = {
                id: nanoid(),
                task: action.payload.task,
                category: action.payload.category,
                date: action.payload.date,
                time: action.payload.time,
                taskDone: false
            };
            state.todos.push(newToDo);
        },
        deleteToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markDoneToDo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.taskDone = !todo.taskDone;
            }
        }
    }
})


export default slice.reducer;
export const { addToDo, deleteToDo, markDoneToDo } = slice.actions;

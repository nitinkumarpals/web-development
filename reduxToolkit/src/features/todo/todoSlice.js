import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Todo 1"
        }
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,//every slice have intital state
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                
            }
            state.todos.push(todo);
        },//state mujhe current initial state me kya kya value h uska access degi
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        updateTodo: (state, action) => {
            if (todo.id === action.payload.id) {
                return { ...todo, title: action.payload.title }
            }
            return todo
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer
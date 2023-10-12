import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState = {
    list: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: nanoid(),
                content: action.payload
            }
            state.list.push(newTodo);
        },
        remove: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload)
        },
        update: (state, action) => {
            state.list.map((item) => {
                if (item.id === action.payload.id) {
                    item.content = action.payload.content;
                }
                return item;
            })
        }
    }
})
export const { add, remove, update } = todoSlice.actions
export default todoSlice.reducer

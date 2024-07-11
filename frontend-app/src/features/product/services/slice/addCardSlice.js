import { createSlice } from "@reduxjs/toolkit"
import { fetchAddCard } from "../thunks/productThunks"

const initialState = {
    status: 'idle',
    data: [],
    error: null
}

const addCardSlice = createSlice({
    name: 'addCard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddCard.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchAddCard.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload
            })
            .addCase(fetchAddCard.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })  
    }
})

export default addCardSlice.reducer
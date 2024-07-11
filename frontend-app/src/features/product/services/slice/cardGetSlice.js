import { createSlice } from "@reduxjs/toolkit"
import { fetchGetCard } from "../thunks/productThunks"

const initialState = {
    status: 'idle',
    error: null,
    data: [],
    count: '',
}

const cardGetSlice = createSlice({
    name: 'cardGet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCard.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchGetCard.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
                state.count = action.payload.count
            })
            .addCase(fetchGetCard.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })
    }
})

export default cardGetSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { fetchReviewsDetail } from ".."

const initialState = {
    status: 'idle',
    data: [],
    error: null
}

const reviewsDetailSlice = createSlice({
    name: 'reviewsDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviewsDetail.pending, (state) => {
                state.status = 'loading'
                state.error = null
                state.data = []
            })
            .addCase(fetchReviewsDetail.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
            })
            .addCase(fetchReviewsDetail.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })
    }
})

export default reviewsDetailSlice.reducer
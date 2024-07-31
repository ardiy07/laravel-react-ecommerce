import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchAddress } from "../thunks/addressThunks"

const initialState = {
    status: 'idle',
    error: null,
    data: []
}

const getSearchAddressSlice = createSlice({
    name: 'getSearchAddress',
    initialState,
    reducers: {
        resetSearch(state) {
            state.data = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchAddress.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchSearchAddress.fulfilled, (state, action) => {
                state.status = 'success'
                state.error = null
                state.data = action.payload.data
            })
            .addCase(fetchSearchAddress.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                state.data = []
            })
    }
})

export const { resetSearch } = getSearchAddressSlice.actions
export default getSearchAddressSlice.reducer
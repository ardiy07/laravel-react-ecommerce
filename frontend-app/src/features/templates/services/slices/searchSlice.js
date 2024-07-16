import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "../thunks/headerThunks";

const initialState = {
    statusSearch: 'idle',
    errorSearch: null,
    dataSearch: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.statusSearch = 'pending'
                state.errorSearch = null
                state.dataSearch = [];
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.statusSearch = 'succeeded'
                state.dataSearch = action.payload;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.statusSearch = 'failed'
                state.dataSearch = [];
                state.errorSearch = action.payload
            })
    }
})

export default searchSlice.reducer
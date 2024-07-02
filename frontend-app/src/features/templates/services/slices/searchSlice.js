import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "../thunks/headerThunks";

const initialState = {
    statusSearch: 'idle',
    errorSearch: null,
    dataSearch: {
        products: [],
        shops: []
    }
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
                state.dataSearch = { products: [], shops: [] };
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.statusSearch = 'succeeded'
                state.dataSearch = {
                    products: action.payload.products || [],
                    shops: action.payload.shops || []
                };
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.statusSearch = 'failed'
                state.dataSearch = { products: [], shops: [] };
                state.errorSearch = action.payload
            })
    }
})

export default searchSlice.reducer
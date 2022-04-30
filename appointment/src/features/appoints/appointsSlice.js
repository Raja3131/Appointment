import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAppoints = createAsyncThunk('/appoints', async () => {
  const response = await axios.get('http://10.0.2.2:5000/appoints');
  return response.data;
});





const appointsSlice = createSlice({
    name: "appoints",
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        
    },
    extraReducers: {
        [fetchAppoints.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [fetchAppoints.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }
        ,
        [fetchAppoints.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default appointsSlice.reducer;



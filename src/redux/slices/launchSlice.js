import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data;
})

const launchSlice = createSlice({
  name: "launch",
  initialState: {
    user: {},
    loading: false,
    error: null
  },

  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },


  }
});

export default launchSlice.reducer;
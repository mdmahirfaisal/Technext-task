import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLaunchData = createAsyncThunk(
  "launch/fetchLaunchData", async () => {
    const res = await fetch(`https://api.spacexdata.com/v3/launches`)
      .then(res => res.json())
    return res;
  })

const launchSlice = createSlice({
  name: "launch",
  initialState: {
    launchAllData: [],
    loading: false,
    error: null
  },

  extraReducers: {
    [fetchLaunchData.pending]: (state, action) => {
      state.loading = true
    },
    [fetchLaunchData.fulfilled]: (state, action) => {
      state.loading = false
      state.launchAllData = action.payload
      console.log(state.launchAllData)
    },
    [fetchLaunchData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
  // extraReducers: (builder) => {

  //   builder.addCase(fetchLaunchData.pending, (state, action) => {
  //     state.launchAllData.push(action.payload)
  //   })

  //   builder.addCase(fetchLaunchData.fulfilled, (state, action) => {
  //     state.launchAllData.push(action.payload)
  //   })

  //   builder.addCase(fetchLaunchData.rejected, (state, action) => {
  //     state.launchAllData.push(action.payload)
  //   })
  // },
});

export default launchSlice.reducer;
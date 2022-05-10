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
    displayFilterData: [],
    loading: false,
    error: null
  },

  reducers: {

    /// filter search Reducer ///
    handleSearchByRocket: (state, { payload }) => {
      state.displayFilterData = state.launchAllData.filter(launch => (launch.rocket.rocket_name || launch.rocket.rocket_id || launch.rocket.rocket_type).toLowerCase().includes(payload.toLowerCase()))
    },

    /// filter success Status Reducer ///
    filterLaunchStatusData: (state, { payload }) => {
      let newData = null;
      if (payload) {
        newData = (state.displayFilterData.length === true || state.launchAllData)?.filter(launch => launch.launch_success === payload)
      } else {
        newData = (state.displayFilterData.length === true || state.launchAllData)?.filter(launch => launch.launch_success === payload)
      }
      state.displayFilterData = newData;
    },

    /// filter Is upcoming Reducer ///
    filterIsUpcomingData: (state, { payload }) => {
      let newData = null;
      if (payload) {
        newData = (state.displayFilterData.length === true || state.launchAllData)?.filter(launch => launch.upcoming === payload)
      } else {
        newData = (state.displayFilterData.length === true || state.launchAllData)?.filter(launch => launch.upcoming === payload)
      }
      state.displayFilterData = newData;
    },

    /// Filter Date Reducer ///
    filterLastTimeData: (state, { payload }) => {
      const getLastWeeksDate = (date) => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate() - date);
      }

      let startDate = null;
      let endDate = new Date();

      if (payload === "week") {
        startDate = new Date(getLastWeeksDate(7))
      }
      else if (payload === "month") {
        startDate = new Date(getLastWeeksDate(30))
      }
      else if (payload === "year") {
        startDate = new Date(getLastWeeksDate(365))
      }
      else if (payload === "2year") {
        startDate = new Date(getLastWeeksDate(730))
      }
      else if (payload === "3year") {
        startDate = new Date(getLastWeeksDate(1095))
      }
      else if (payload === "4year") {
        startDate = new Date(getLastWeeksDate(1460))
      }
      else if (payload === "5year") {
        startDate = new Date(getLastWeeksDate(1825))
      }
      else if (payload === "6year") {
        startDate = new Date(getLastWeeksDate(2190))
      }
      else if (payload === "7year") {
        startDate = new Date(getLastWeeksDate(2555))
      }
      else if (payload === "8year") {
        startDate = new Date(getLastWeeksDate(2920))
      }
      else if (payload === "9year") {
        startDate = new Date(getLastWeeksDate(3285))
      }
      else if (payload === "10year") {
        startDate = new Date(getLastWeeksDate(3500))
      }

      const resultLaunchDate = state.launchAllData?.filter(a => {
        let date = new Date(a.launch_date_local);
        return (date >= startDate && date <= endDate);
      })
      console.log(startDate)
      console.log(endDate)
      state.displayFilterData = resultLaunchDate
    },
  },

  /// Extra Reducers ///

  extraReducers: {
    [fetchLaunchData.pending]: (state, action) => {
      state.loading = true
    },
    [fetchLaunchData.fulfilled]: (state, action) => {
      state.loading = false
      state.launchAllData = action.payload
    },
    [fetchLaunchData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
});

export const { handleSearchByRocket, filterLaunchStatusData, filterIsUpcomingData, filterLastTimeData } = launchSlice.actions;

export default launchSlice.reducer;
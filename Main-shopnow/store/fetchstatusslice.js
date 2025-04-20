import { createSlice } from "@reduxjs/toolkit";
let fetchstatusSlice = createSlice({
  name: "items",
  initialState: {
    fetchdone: false,
    currentlyfetching: false,
  },
  reducers: {
    markfetchdone: (state) => {
      return (state.fetchdone = true);
    },
    markfetchingstarted: (state) => {
      return (state.currentlyfetching = true);
    },
    markfetchingended: (state) => {
      return (state.currentlyfetching = true);
    },
  },
});
export let fetchstatusActions = fetchstatusSlice.actions;
export default fetchstatusSlice;

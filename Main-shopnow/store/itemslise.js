import { createSlice } from "@reduxjs/toolkit";
let itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addinitialitems: (state, actions) => {
      console.log(state, actions);
      return actions.payload;
    },
  },
});
export let itemActions = itemSlice.actions;
export default itemSlice;

import { DEFAULT_ITEMS } from "../data/items";
import { createSlice } from "@reduxjs/toolkit";
let kidsslice = createSlice({
  name: "kids",
  initialState: [],
  reducers: {
    addinitialitems: (state, actions) => {
      console.log(state, actions);
      return actions.payload;
    },
  },
});
export let kidsActions = kidsslice.actions;
export default kidsslice;

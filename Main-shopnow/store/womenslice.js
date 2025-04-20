import { DEFAULT_ITEMS } from "../data/items";
import { createSlice } from "@reduxjs/toolkit";
let womenslice = createSlice({
  name: "women",
  initialState: [],
  reducers: {
    addinitialitems: (state, actions) => {
      console.log(state, actions);
      return actions.payload;
    },
  },
});
export let womenActions = womenslice.actions;
export default womenslice;

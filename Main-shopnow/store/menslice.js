import { DEFAULT_ITEMS } from "../data/items";
import { createSlice } from "@reduxjs/toolkit";
let menslice = createSlice({
  name: "men",
  initialState: [],
  reducers: {
    addinitialitems: (state, actions) => {
      console.log(state, actions);
      return actions.payload;
    },
  },
});
export let menActions = menslice.actions;
export default menslice;

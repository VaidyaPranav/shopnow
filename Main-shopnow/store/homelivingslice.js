import { DEFAULT_ITEMS } from "../data/items";
import { createSlice } from "@reduxjs/toolkit";
let homelivingslice = createSlice({
  name: "homeliving",
  initialState: [],
  reducers: {
    addinitialitems: (state, actions) => {
      console.log(state, actions);
      return actions.payload;
    },
  },
});
export let homelivingActions = homelivingslice.actions;
export default homelivingslice;

import { DEFAULT_ITEMS } from "../data/items";
import { createSlice } from "@reduxjs/toolkit";
let bueatyslice = createSlice({
  name: "bueaty",
  initialState: [],
  reducers: {
    addinitialitems: (state, actions) => {
      console.log(state, actions);
      return actions.payload;
    },
  },
});
export let bueatyActions = bueatyslice.actions;
export default bueatyslice;

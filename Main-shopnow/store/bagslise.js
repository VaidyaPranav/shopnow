import { createSlice } from "@reduxjs/toolkit";
let BagSlise = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtobag: (state, actions) => {
      state.push(actions.payload);
      console.log(actions.payload);
    },
    dltfrombag: (state, actions) => {
      return state.filter((itemId) => itemId !== actions.payload);
    },
  },
});
export let BagActions = BagSlise.actions;
export default BagSlise;

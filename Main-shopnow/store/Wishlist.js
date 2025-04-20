import { createSlice } from "@reduxjs/toolkit";
let WishlistSlise = createSlice({
  name: "Wishlist",
  initialState: [],
  reducers: {
    addtowishlist: (state, actions) => {
      state.push(actions.payload);
      console.log(actions.payload);
    },
    dltfromwishlist: (state, actions) => {
      return state.filter((itemId) => itemId !== actions.payload);
    },
  },
});
export let WishlistActions = WishlistSlise.actions;
export default WishlistSlise;

import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemslise";
import fetchstatusSlice from "./fetchstatusslice";
import BagSlise from "./bagslise";
import menslice from "./menslice";
import WishlistSlise from "./Wishlist";
import womenslice from "./womenslice";
import kidsslice from "./kidsslice";
import homelivingslice from "./homelivingslice";
import bueatyslice from "./bueatyslice";
let myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchstatus: fetchstatusSlice.reducer,
    bag: BagSlise.reducer,
    men: menslice.reducer,
    women: womenslice.reducer,
    kids: kidsslice.reducer,
    homeliving: homelivingslice.reducer,
    bueaty: bueatyslice.reducer,
    wishlist: WishlistSlise.reducer,
  },
});
export default myntraStore;

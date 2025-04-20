import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./components/Signin.jsx";
import Bag from "./Routes/bag.jsx";
import Men from "./Routes/men.jsx";
import Women from "./Routes/women.jsx";
import Kids from "./Routes/kids.jsx";
import Homeliving from "./Routes/homeliving.jsx";
import Bueaty from "./Routes/bueaty.jsx";
import Home from "./Routes/Home.jsx";
import Wishlist from "./Routes/Wishlist.jsx";
import { createRoot } from "react-dom/client";
import React from "react";
import EmptyWishlist from "./components/Emptywishlist.jsx";
import { Provider } from "react-redux";
import myntraStore from "../store/index.js";
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "/Bag",
        element: <Bag />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/bueaty",
        element: <Bueaty />,
      },
      {
        path: "/homeliving",
        element: <Homeliving />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/Profile",
        element: <Signin />,
      },
      {
        path: "/Emptywishlist",
        element: <EmptyWishlist />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

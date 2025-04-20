import React from "react";
import { Link } from "react-router-dom";
import "../css/emptywishlist.css";
import { PiEmptyBold } from "react-icons/pi";

let EmptyWishlist = () => {
  return (
    <center>
      <div className="empty-wishlist-container">
        <h2 className="Main-title">Your Wishlist is Empty</h2>
        <p>Add items that you like to your</p>
        <p>Review them anytime and easily move them to the bag.</p>

        {/* You can replace this with an SVG or image */}
        <div className="icon">
          <PiEmptyBold />
        </div>
        <div></div>
        <Link to="/Home">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    </center>
  );
};

export default EmptyWishlist;

import { IoPersonCircleOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
let Header = () => {
  let bagtotal = useSelector((store) => store.bag);
  console.log("we got", bagtotal);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/MYapp.jpeg"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/homeliving">Home & Living</Link>
          <Link to="/bueaty">Beauty</Link>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <IoSearchOutline />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link to="/Profile">
            <div className="action_container">
              <span className="material-symbols-outlined action_icon">
                <IoPersonCircleOutline />
              </span>
              <span className="action_name">Profile</span>
            </div>
          </Link>

          <Link to="/Wishlist">
            <div className="action_container">
              <span className="material-symbols-outlined action_icon">
                <MdFavorite />
              </span>
              <span className="action_name">Wishlist</span>
            </div>
          </Link>

          <Link className="action_container" to="/Bag">
            <span className="material-symbols-outlined action_icon">
              <FaShoppingBag />
            </span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagtotal.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;

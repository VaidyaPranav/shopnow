import { IoPersonCircleOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
let Header = () => {
  let bagtotal = useSelector((store) => store.bag);
  console.log("we got", bagtotal);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px", // Adjusted padding for centering
    backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "30px", // Adjusted margin for centering
  };

  const navBarStyle = {
    display: "flex",
    gap: "20px",
    fontSize: "16px",
    fontWeight: "500",
    flexGrow: 1,
    justifyContent: "center",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
  };

  const navLinkHoverStyle = {
    color: "#ff4081",
  };

  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "5px 10px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    marginRight: "30px", // Adjusted margin for centering
  };

  const searchInputStyle = {
    border: "none",
    outline: "none",
    marginLeft: "10px",
    fontSize: "14px",
    width: "250px",
  };

  const actionBarStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const actionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
    transition: "color 0.3s",
  };

  const actionContainerHoverStyle = {
    color: "#ff4081",
  };

  const bagItemCountStyle = {
    backgroundColor: "#ff4081",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    marginLeft: "5px",
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <Link to="/">
            <img
              className="myntra_home"
              src="images/MYapp.jpeg"
              alt="Myntra Home"
              style={{ height: "40px", marginLeft: "10px" }}
            />
          </Link>
        </div>
        <nav style={navBarStyle}>
          {["/men", "/women", "/kids", "/homeliving", "/bueaty"].map((path, index) => (
            <Link
              key={index}
              to={path}
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
          <a
            href="#"
            style={navLinkStyle}
            onMouseEnter={(e) => (e.target.style.color = navLinkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Studio <sup>New</sup>
          </a>
        </nav>
        <div style={searchBarStyle}>
          <span className="material-symbols-outlined search_icon">
            <IoSearchOutline />
          </span>
          <input
            style={searchInputStyle}
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div style={actionBarStyle}>
          <Link
            to="/Profile"
            style={actionContainerStyle}
            onMouseEnter={(e) => (e.target.style.color = actionContainerHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = actionContainerStyle.color)}
          >
            <span className="material-symbols-outlined action_icon">
              <IoPersonCircleOutline />
            </span>
            <span className="action_name">Profile</span>
          </Link>

          <Link
            to="/Wishlist"
            style={actionContainerStyle}
            onMouseEnter={(e) => (e.target.style.color = actionContainerHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = actionContainerStyle.color)}
          >
            <span className="material-symbols-outlined action_icon">
              <MdFavorite />
            </span>
            <span className="action_name">Wishlist</span>
          </Link>

          <Link
            className="action_container"
            to="/Bag"
            style={actionContainerStyle}
            onMouseEnter={(e) => (e.target.style.color = actionContainerHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = actionContainerStyle.color)}
          >
            <span className="material-symbols-outlined action_icon">
              <FaShoppingBag />
            </span>
            <span className="action_name">Bag</span>
            <span style={bagItemCountStyle}>{bagtotal.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

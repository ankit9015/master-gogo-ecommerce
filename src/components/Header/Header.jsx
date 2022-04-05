import { Link, NavLink, useLocation } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext/ProductContext";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { useCart } from "../../context/CartContext/CartContext";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

const Header = ({ loginInfo }) => {
  const { productDispatch } = useProductContext();

  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "",
  });

  return (
    <nav className="header navbar-container">
      {/* -- ----------------------- NavBar left start --------------- */}
      <div className="navbar-left flex-row">
        <div className="hamburger-icon nav-icon-badge">
          <FaBars />
        </div>
        <div className="nav-logo">
          <NavLink
            style={getActiveLinkStyle}
            to="Home"
            onClick={() =>
              productDispatch({
                type: "CLEAR-FILTER",
              })
            }
          >
            <img src="./logo-ecom.png" alt="logo" />
          </NavLink>
        </div>
        <NavLink to="Mockapi" style={getActiveLinkStyle}>
          <span>Mockman</span>
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="Products"
          className="m-m"
          onClick={() =>
            productDispatch({
              type: "CLEAR-FILTER",
            })
          }
        >
          <span>Products</span>
        </NavLink>
      </div>

      {/* -- ----------------------- NavBar left ends --------------- */}

      {/* ----------------- Searchbox start -------------------- */}

      <div className="search-box flex-row">
        <FaSearch />
        <input
          className="search-input"
          type="search"
          name="product-search"
          id="product-search"
          placeholder="Search"
        ></input>
      </div>

      {/* ----------------- Searchbox end ---------------------- */}
      {/* ---------------------- Navbar right start --------------------  */}

      <div className="right-navbar">
        <div className="nav-icons list-style-none ">
          {false ? (
            <NavLink
              style={getActiveLinkStyle}
              to="Login"
              className="nav-icon-link"
              onClick={() => loginInfo.setIsLogin(false)}
            >
              <span className="badge nav-icon-badge">
                <i className="" aria-hidden="true"></i>
              </span>
              <span className="nav-icon-text">Logout</span>
            </NavLink>
          ) : (
            <NavLink
              style={getActiveLinkStyle}
              to="Login"
              className="nav-icon-link"
            >
              <span className="badge nav-icon-badge">
                <FaUser />
              </span>
              <span className="nav-icon-text">Login</span>
            </NavLink>
          )}
          <NavLink
            style={getActiveLinkStyle}
            to="Wishlist"
            className="nav-icon-link"
          >
            <span className="badge nav-icon-badge">
              <FaHeart />
              {wishlistState.itemTotal > 0 && (
                <span className="badge-count">{wishlistState.itemTotal}</span>
              )}
            </span>
            <span className="nav-icon-text">Wishlist</span>
          </NavLink>
          <NavLink
            style={getActiveLinkStyle}
            to="Cart"
            className="nav-icon-link"
          >
            <span className="badge nav-icon-badge">
              <FaShoppingCart />
              {cartState.itemTotal !== 0 && (
                <span className="badge-count">{cartState.itemTotal}</span>
              )}
            </span>
            <span className="nav-icon-text">Cart</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

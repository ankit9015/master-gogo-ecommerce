import { NavLink } from "react-router-dom";
import "./Header.css";

import {
  FaBars,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaHeart,
  MdLogout,
} from "../../utils/icon";
import { useAuth, useCart, useProduct, useWishlist } from "../../context";

const Header = () => {
  const { productDispatch } = useProduct();
  const { authState, logoutHandler } = useAuth();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "",
  });

  return (
    <nav className="header navbar-container">
      {/* -- ----------------------- NavBar left start --------------- */}
      <div className="navbar-left flex-row">
        <div className="nav-logo">
          <NavLink
            style={getActiveLinkStyle}
            to="/"
            onClick={() =>
              productDispatch({
                type: "CLEAR-FILTER",
              })
            }
          >
            <img src="logo-ecom.png" alt="logo" />
          </NavLink>
        </div>
      </div>

      {/* -- ----------------------- NavBar left ends --------------- */}

      {/* ---------------------- Navbar right start --------------------  */}

      <div className="right-navbar">
        <div className="nav-icons list-style-none ">
          {authState?.authToken ? (
            <NavLink
              style={getActiveLinkStyle}
              to="../login"
              className="nav-icon-link"
              onClick={() => logoutHandler()}
            >
              <span className="badge nav-icon-badge">
                <MdLogout />
              </span>
              <span className="nav-icon-text text-md">Logout</span>
            </NavLink>
          ) : (
            <NavLink
              style={getActiveLinkStyle}
              to="../login"
              className="nav-icon-link"
            >
              <span className="badge nav-icon-badge">
                <FaUser />
              </span>
              <span className="nav-icon-text text-md">Login</span>
            </NavLink>
          )}
          <NavLink
            style={getActiveLinkStyle}
            to="../wishlist"
            className="nav-icon-link"
          >
            <span className="badge nav-icon-badge">
              <FaHeart />
              {wishlistState.itemTotal !== 0 && (
                <span className="badge-count">{wishlistState.itemTotal}</span>
              )}
            </span>
            <span className="nav-icon-text text-md">Wishlist</span>
          </NavLink>
          <NavLink
            style={getActiveLinkStyle}
            to="../cart"
            className="nav-icon-link"
          >
            <span className="badge nav-icon-badge">
              <FaShoppingCart />
              {cartState.itemTotal !== 0 && (
                <span className="badge-count">{cartState.itemTotal}</span>
              )}
            </span>
            <span className="nav-icon-text text-md">Cart</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

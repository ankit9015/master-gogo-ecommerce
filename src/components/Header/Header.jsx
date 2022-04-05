import { Link } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext/ProductContext";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { useCart } from "../../context/CartContext/CartContext";
import { useEffect } from "react/cjs/react.production.min";

const Header = ({ loginInfo }) => {
  const { productDispatch } = useProductContext();

  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  return (
    <nav className="header navbar-container">
      {/* -- ----------------------- NavBar left start --------------- */}
      <div className="navbar-left flex-row">
        <div className="hamburger-icon nav-icon-badge">
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </div>
        <div className="nav-logo">
          <Link
            to="Home"
            onClick={() =>
              productDispatch({
                type: "CLEAR-FILTER",
              })
            }
          >
            <img src="./logo-ecom.png" alt="logo" />
          </Link>
        </div>
        <Link to="Mockapi">
          <span>Mockman</span>
        </Link>
        <Link
          to="Products"
          className="m-m"
          onClick={() =>
            productDispatch({
              type: "CLEAR-FILTER",
            })
          }
        >
          <span>Products</span>
        </Link>
      </div>

      {/* -- ----------------------- NavBar left ends --------------- */}

      {/* ----------------- Searchbox start -------------------- */}

      <div className="search-box flex-row">
        <i className="fa-solid fa-search" aria-hidden="true"></i>
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
            <Link
              to="Login"
              className="nav-icon-link"
              onClick={() => loginInfo.setIsLogin(false)}
            >
              <span className="badge nav-icon-badge">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="nav-icon-text">Logout</span>
            </Link>
          ) : (
            <Link to="Login" className="nav-icon-link">
              <span className="badge nav-icon-badge">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="nav-icon-text">Login</span>
            </Link>
          )}
          <Link to="Wishlist" className="nav-icon-link">
            <span className="badge nav-icon-badge">
              <i className="fa fa-heart" aria-hidden="true"></i>
              {wishlistState.itemTotal > 0 && (
                <span className="badge-count">{wishlistState.itemTotal}</span>
              )}
            </span>
            <span className="nav-icon-text">Wishlist</span>
          </Link>
          <Link to="Cart" className="nav-icon-link">
            <span className="badge nav-icon-badge">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              {cartState.itemTotal !== 0 && (
                <span className="badge-count">{cartState.itemTotal}</span>
              )}
            </span>
            <span className="nav-icon-text">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

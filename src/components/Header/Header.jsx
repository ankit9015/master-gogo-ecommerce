import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header navbar-container">
      {/* -- ----------------------- NavBar left start --------------- */}
      <div className="navbar-left">
        <div className="hamburger-icon nav-icon-badge">
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </div>
        <div className="nav-logo">
          <Link to="Home">
            <img src="./logo-ecom.png" alt="logo" />
          </Link>
        </div>
        <Link to="Mockapi">
          <span>Mockman</span>
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
          <Link to="Login" className="nav-icon-link">
            <span className="badge nav-icon-badge">
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
            <span className="nav-icon-text">Login</span>
          </Link>
          <Link to="Wishlist" className="nav-icon-link">
            <span className="badge nav-icon-badge">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span className="badge-count">0</span>
            </span>
            <span className="nav-icon-text">Wishlist</span>
          </Link>
          <Link to="Cart" className="nav-icon-link">
            <span className="badge nav-icon-badge">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="badge-count">10</span>
            </span>
            <span className="nav-icon-text">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import "./App.css";
import Router from "./Router/router";
import {Link} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <div>Hello</div>
      <Link to="Home">Home|| </Link>
      <Link to="Products">Products || </Link>
      <Link to="Wishlist">Wishlist || </Link>
      <Link to="Cart">Cart|| </Link>
      <Link to="Auth">Auth || </Link>
      <Router />
    </div>
    
  );
}

export default App;

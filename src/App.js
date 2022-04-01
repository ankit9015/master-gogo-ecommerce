import "./App.css";
import Router from "./Router/router";

import { ProductProvider } from "./context/ProductContext/ProductContext";
import { CartProvider } from "./context/CartContext/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductProvider>
          <div className="page-layout">
            <Header></Header>
            <div className="page-layout__main">
              <Router />
            </div>
            <Footer></Footer>
          </div>
        </ProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;

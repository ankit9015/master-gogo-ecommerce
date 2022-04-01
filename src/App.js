import "./App.css";
import { useState } from "react";
import Router from "./Router/router";
import PageLayout from "./pages/PageLayout/PageLayout";
import { ProductProvider } from "./context/ProductContext/ProductContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <ProductProvider>
        <PageLayout>
          <Router loginInfo={{ isLogin, setIsLogin }} />
        </PageLayout>
      </ProductProvider>
    </div>
  );
}

export default App;

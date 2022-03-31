import "./App.css";
import Router from "./Router/router";
import PageLayout from "./pages/PageLayout/PageLayout";
import { ProductProvider } from "./context/ProductContext/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <PageLayout>
          <Router />
        </PageLayout>
      </ProductProvider>
    </div>
  );
}

export default App;

import "./App.css";
import Router from "./Router/router";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageLayout from "./pages/PageLayout/PageLayout";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Router />
      </PageLayout>
      {/* <Header></Header>
      
      <Footer></Footer> */}
    </div>
  );
}

export default App;

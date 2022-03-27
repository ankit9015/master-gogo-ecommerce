import "./App.css";
import Router from "./Router/router";
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

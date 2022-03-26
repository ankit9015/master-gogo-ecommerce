import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./page-layout.css";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Header></Header>
      <div className="page-layout__main H1 text-center">{children}</div>

      <Footer></Footer>
    </div>
  );
};

export default PageLayout;

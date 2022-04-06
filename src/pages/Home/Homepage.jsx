import { categories } from "../../backend/db/categories";
import { newStocks } from "../../backend/db/announcements";
import Card from "../../components/Card/Card";
import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Router/router";
import { useProductContext } from "../../context/ProductContext/ProductContext";
import Header from "../../components/Header/Header";

const Home = () => {
  const { productDispatch } = useProductContext();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Header />
      {/* ------------------------------------------------------categoy ribbon starts */}
      <div className="ribbon flex-row">
        {categories.map((item) => (
          <Link
            key={item._id}
            to="../Products"
            onClick={() =>
              productDispatch({
                type: "FILTER-CATEGORIES",
                payload: { category: item.categoryName },
              })
            }
          >
            <Card
              key={item._id}
              variant="vertical"
              className="product-category m-s p-m"
              img={{ src: item.img, alt: item.categoryName }}
              overlayText={item.categoryName}
            />
          </Link>
        ))}
      </div>
      {/* -----------------------------------------------------------category ribbon ends */}

      {/* ---------------------------------------------------------------main shelf starts */}
      <div className="main-shelf">
        <h1 className="H1 p-l">Some products will be displayed here</h1>
      </div>
      {/* ------------------------------------------------------------------main shelf ends */}

      {/* ------------------------------------------------------------------announcement ribbon starts */}
      <div className="announcement ribbon flex-row">
        {newStocks.map((item) => (
          <Card
            key={item._id}
            variant="horizontal"
            className="new-arrivals"
            img={{
              src: item.img,
              alt: `${item.stockType} ${item.categoryName}`,
            }}
            title={item.stockType.toUpperCase()}
            subtitle={item.categoryName.toUpperCase()}
            description={item.description}
            cardButton={{
              link: "./Products",
              variant: "button-primary ",
              info: "Know More",
            }}
          />
        ))}
      </div>
      {/* ------------------------------------------------------------------announcement ribbon ends */}
    </div>
  );
};

export default Home;

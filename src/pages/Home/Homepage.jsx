import { newStocks } from "../../backend/db/announcements";
import Card from "../../components/Card/Card";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Router/router";
import { useProductContext } from "../../context/ProductContext/ProductContext";
import Header from "../../components/Header/Header";
import axios from "axios";

const Home = () => {
  const { productDispatch } = useProductContext();

  useEffect(() => {
    document.title = "Home";
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        const categoriesList = response.data.categories;
        setCategories((prev) => [...prev, ...categoriesList]);
      } catch (err) {
        alert(err);
      }
    })();
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
        <h1 className="H1 p-l"></h1>
        <div className="fluid-img">
          <img src="cover-photo.jpg" alt="t-shirts" />
        </div>
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

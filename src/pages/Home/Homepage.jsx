import { newStocks } from "../../backend/db/announcements";
import Card from "../../components/Card/Card";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Router/router";
import axios from "axios";
import { useProduct } from "../../context";
import { Header } from "../../components";
import "./Homepage.css";

const Home = () => {
  const { productDispatch } = useProduct();
  const navigate = useNavigate();
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
            to="../explore"
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
              className="product-category p-s"
              img={{ src: item.img, alt: item.categoryName }}
              overlayText={item.categoryName}
            />
          </Link>
        ))}
      </div>
      {/* -----------------------------------------------------------category ribbon ends */}

      {/* ---------------------------------------------------------------banner starts */}
      <div className="banner">
        <div className="fluid-img">
          <img src="cover-photo.jpg" alt="t-shirts" />
        </div>
        <button
          className="button-primary banner-cta-btn text-md"
          onClick={() => navigate("../explore")}
        >
          Shop Now
        </button>
      </div>
      {/* ------------------------------------------------------------------banner ends */}

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
              link: "../explore",
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

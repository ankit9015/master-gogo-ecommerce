import { categories } from "../../backend/db/categories";
import { newStocks } from "../../backend/db/announcements";
import Card from "../../components/Card/Card";
import React from "react";
import "../../Router/router";

const Home = () => {
  return (
    <div>
      {/* ------------------------------------------------------categoy ribbon starts */}
      <div class="ribbon flex-row">
        {categories.map((item) => (
          <Card
            variant="vertical"
            className="product-category m-s p-m"
            img={{ src: item.img, alt: item.categoryName }}
            overlayText={item.categoryName}
          />
        ))}
      </div>
      {/* -----------------------------------------------------------category ribbon ends */}

      {/* ---------------------------------------------------------------main shelf starts */}
      <div class="main-shelf">
        <h1 className="H1 p-l">Some products will be displayed here</h1>
      </div>
      {/* ------------------------------------------------------------------main shelf ends */}

      {/* ------------------------------------------------------------------announcement ribbon starts */}
      <div class="announcement ribbon flex-row">
        {newStocks.map((item) => (
          <Card
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
              link: "../Login", //this link need to be updated, it should take to the repective category in product page.
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

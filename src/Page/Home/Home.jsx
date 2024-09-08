import React from "react";
import "./Home.css";
import Product from "../../Components/Products/Products";
import products from "../../data/Products.js"; // Import the products array

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="home__row">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </>
  );
}

export default Home;

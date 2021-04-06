import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
function HomePage() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const dummyProduct = res.data;
      setproducts(dummyProduct);
    });
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default HomePage;

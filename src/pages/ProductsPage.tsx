import React, { useEffect, useLayoutEffect } from "react";
import FilterProducts from "../components/FilterProducts";

const ProductsPage = () => {

  
  return (
    <main id="product_page">
      <section className="container">
        <FilterProducts />
        {/* <ListProducts /> */}
      </section>
    </main>
  );
};

export default ProductsPage;

import React, { useEffect, useLayoutEffect } from "react";
import FilterProducts from "../components/FilterProducts";
import ListProducts from "../components/ListProducts";

const ProductsPage = () => {

  
  return (
    <main id="product_page">
      <section className="container py-8  mx-auto flex gap-5">
        <FilterProducts />
        <ListProducts />
      </section>
    </main>
  );
};

export default ProductsPage;

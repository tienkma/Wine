import React, { useEffect, useLayoutEffect } from "react";
import FilterProducts from "../components/pages/products/FilterProducts";
import ListProducts from "../components/pages/products/ListProducts";

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

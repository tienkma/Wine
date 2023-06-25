import React, { useEffect, useLayoutEffect, useState } from "react";
import FilterProducts from "../components/pages/products/FilterProducts";
import ListProducts from "../components/pages/products/ListProducts";
import { Footer, Loading } from "../components";
import LoadingPage from "../components/common/LoadingPage";
import { getDataAPI } from "../utils/api";
import { useAppDispatch, useAppSelector } from "../redux/root/hooks";
import {
  selectproductList,
  selectproductLoading,
  selectproductError,
  selectproductFilter,
  getListProduct,
  selectProductPage,
} from "../redux/silces/productSlide";

const ProductsPage = () => {
  const listProduct = useAppSelector(selectproductList);
  const isLoading = useAppSelector(selectproductLoading);
  const isError = useAppSelector(selectproductError);
  const filterProduct = useAppSelector(selectproductFilter);
  const page = useAppSelector(selectProductPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getListProduct({ filter: filterProduct, params: { page, limit: 50 } })
    );
  }, [filterProduct, page]);

  return (
    <>
      <main id="product_page">
        <section className="container py-8  mx-auto flex gap-5">
          <FilterProducts />
          <Loading loading={isLoading} className="flex-1 mt-5">
            <ListProducts data={listProduct} loading={isLoading} />
          </Loading>
        </section>
      </main>
      <LoadingPage loading={isLoading} className="hidden">
        <></>
      </LoadingPage>
    </>
  );
};

export default ProductsPage;

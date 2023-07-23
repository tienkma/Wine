import React, { useEffect, useLayoutEffect, useState } from "react";
import FilterProducts from "../components/pages/products/FilterProducts";
import ListProducts from "../components/pages/products/ListProducts";
import { Footer, Loading } from "../components";
import LoadingPage from "../components/common/LoadingPage";
import { useAppDispatch, useAppSelector } from "../redux/root/hooks";
import {
  selectproductList,
  selectproductLoading,
  selectproductError,
  selectproductFilter,
  getListProduct,
  selectProductPage,
  selectproductSort,
  selectproductSortBy,
} from "../redux/silces/productSlide";
import PageHero from "../components/common/PageHero";

const ProductsPage = () => {
  const listProduct = useAppSelector(selectproductList);
  const isLoading = useAppSelector(selectproductLoading);
  const isError = useAppSelector(selectproductError);
  const filterProduct = useAppSelector(selectproductFilter);
  const page = useAppSelector(selectProductPage);

  const sort = useAppSelector(selectproductSort);
  const sortBy = useAppSelector(selectproductSortBy);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getListProduct({
        filter: { ...filterProduct, sortDirection: sort, sortBy },
        params: { page, limit: 24 },
      })
    );
  }, [filterProduct, page, sort, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main id="product_page">
        <PageHero title="Product" />
        <section className="container py-6 max-md:flex-col mx-auto flex gap-5">
          <FilterProducts />
          <Loading loading={isLoading} className="flex-1 mt-5">
            <ListProducts data={listProduct} />
          </Loading>
        </section>
      </main>
      <LoadingPage loading={isLoading} className="hidden" footer={true}>
        <></>
      </LoadingPage>
    </>
  );
};

export default ProductsPage;

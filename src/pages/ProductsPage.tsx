import React, { useEffect, useLayoutEffect, useState } from "react";
import FilterProducts from "../components/pages/products/FilterProducts";
import ListProducts from "../components/pages/products/ListProducts";
import { Footer, Loading } from "../components";
import LoadingPage from "../components/common/LoadingPage";
import { getDataAPI } from "../utils/api";

const ProductsPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async() => {
      setLoading(true)
      try {
        const result: any = await getDataAPI()
        setData(result)
      } catch (error) {
        
      } finally {
        setLoading(false)
      }

    })()
  }, [])
  
  return (
    <>
    <main id="product_page">
      <section className="container py-8  mx-auto flex gap-5">
        <FilterProducts />
        <Loading loading={loading} className="flex-1 mt-5">
          <ListProducts data={data} loading={loading} />
        </Loading>
      </section>
    </main>
    <LoadingPage loading={loading} className="hidden"><></></LoadingPage>
    </>
  );
};

export default ProductsPage;

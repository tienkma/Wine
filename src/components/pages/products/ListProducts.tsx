import React, { useEffect, useState } from "react";
import { arrayFormList } from "../../../utils/ArrayForm";
import Sort from "./Sort";
import { Pagination } from "@mui/material";
import ProductItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import {
  selectProductPage,
  setPage,
  selectProductTotalPage,
} from "../../../redux/silces/productSlide";

interface ListProductsProps {
  data: any[] | null;
}

const ListProducts = (props: ListProductsProps) => {
  const { data } = props;
  const dispatch = useAppDispatch();

  let newFilterList = data || [];
  const page = useAppSelector(selectProductPage);
  const totalPage = useAppSelector(selectProductTotalPage);

  const [index, setIndex] = useState(0);

  return (
    <section id="product_content " className="flex flex-1 flex-col">
      <Sort />
      {newFilterList.length < 1 ? (
        <h2 style={{ marginTop: "20px" }}>No products</h2>
      ) : (
        <>
          <div
            className="listProduct grid gap-3 mt-7"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {newFilterList.map((item: any, idx: number) => (
              <ProductItem key={idx} {...item} />
            ))}
          </div>
          <div className="flex mb-3 mt-5 justify-end">
            <Pagination
              count={totalPage}
              page={page}
              onChange={(e, page) => {
                dispatch(setPage(page));
                window.scrollTo(0, 0);
              }}
              shape="rounded"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ListProducts;

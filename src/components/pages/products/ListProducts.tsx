import React, { useEffect, useState } from "react";
import { arrayFormList } from "../../../utils/ArrayForm";
import CartItem from "./CartItem";
import Sort from "./Sort";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { getDataAPI } from "../../../utils/api";
import Loading from "../../common/Loading";
import { Pagination } from "@mui/material";

interface ListProductsProps {
  data: any[]
  loading: boolean
}

const ListProducts = (props: ListProductsProps) => {

  const {data, loading} = props
  // const {
  //   state: { defaultList, filterProduct },
  // } = useFilterContext();
  let newFilterList = arrayFormList(data);

  const [index, setIndex] = useState(0);

  const changeIndexPage = (type: string) => {
    if (type === "prev") {
      setIndex((index) => {
        return index - 1;
      });
    }
    if (type === "next") {
      setIndex((index) => {
        return index + 1;
      });
    }
  };


  return (
    <section id="product_content " className="flex flex-1 flex-col">
      <Sort />
      {newFilterList.length < 1 ? (
        <h2 style={{ marginTop: "20px" }}>No products</h2>
      ) : (
        <>
          {!newFilterList[index] ? (
            setIndex(0)
          ) : (
            <div className="listProduct grid gap-3 mt-7" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
              {newFilterList[index].map((item, idx) => (
                <CartItem key={idx} {...item} />
              ))}
            </div>
          )}
          <div className="flex mb-3 mt-5 justify-end">
           <Pagination  count={10} shape="rounded" />
          </div>
        </>
      )}
    </section>
  );
};

export default ListProducts;

import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { arrayFormList } from "../utils/ArrayForm";
import CartItem from "./CartItem";
import Loadding from "./Loadding";
import Sort from "./Sort";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useHomeContact } from "../context/HomeContext";

const ListProducts = () => {
  const {
    state: { defaultList, filterProduct },
  } = useFilterContext();
  const {state:{home_loading}} = useHomeContact();
  let newFilterList = arrayFormList(filterProduct);

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
    <section id="product_content">
      <Sort />
      {newFilterList.length < 1 ? (
        <h2 style={{ marginTop: "20px" }}>No products</h2>
      ) : (
        <>
          {!newFilterList[index] ? (
            setIndex(0)
          ) : (
            <div className="listProduct">
              {newFilterList[index].map((item, idx) => (
                <CartItem key={idx} {...item} />
              ))}
            </div>
          )}
          <div className="listPage">
            {index > 0 ? (
              <button
                className="btn_page btn_change-index"
                onClick={() => {
                  changeIndexPage("prev");
                  window.scrollTo(0, 0);
                }}
              >
                <GrFormPrevious size="18" />
              </button>
            ) : null}
            {Array.from({ length: newFilterList.length }, (_, i) => i).map(
              (item) => {
                return (
                  <button
                    className={`btn_page ${
                      item === index ? "activeBtnPage" : null
                    } `}
                    key={item}
                    onClick={() => {
                      setIndex(item);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item + 1}
                  </button>
                );
              }
            )}
            {index < newFilterList.length - 1 ? (
              <button
                className="btn_page btn_change-index"
                onClick={() => {
                  changeIndexPage("next");
                  window.scrollTo(0, 0);
                }}
              >
                <GrFormNext size="18" />
              </button>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
};

export default ListProducts;

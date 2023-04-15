import React, { useEffect, useState } from "react";
import { arrayFormList } from "../utils/ArrayForm";
import CartItem from "./CartItem";
import Sort from "./Sort";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { getDataAPI } from "../utils/api";

const ListProducts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async() => {
      try {
        const result: any = await getDataAPI()
        setData(result)
      } catch (error) {
        
      }

    })()
  }, [])
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
            <div className="listProduct grid gap-6 mt-7" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
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

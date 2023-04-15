import React, { useLayoutEffect } from "react";

const FilterProducts = () => {
  const listWinery: any[] = [];
  return (
    <section
      id="filterProduct"
      style={{ width: 250 }}
      className="flex-shrink-0"
    >
      <div>
        <input
          type="text"
          placeholder="search"
          className="search w-full p-1 text-background border border-solid border-background rounded placeholder:capitalize placeholder:text-background"
          // value={search}
          // onChange={(e) => changeFilter(e.target.value, "search")}
        />
        <div className="winery mb-5">
          <h3 className="text-background capitalize text-2xl mt-5 mb-2">
            winery
          </h3>
          <div className="listWinery flex flex-col">
            {listWinery.map((item) => {
              return (
                <button
                  key={item}
                  className={`$
                    // item.toLowerCase() === winery.toLowerCase()
                    //   ? "activeWinery"
                    //   : null
                  mt-1 text-base block mr-auto bg-transparent text-background/70 font-bold capitalize `}
                  value={item}
                  // onClick={(e) =>
                  //   changeFilter((e.target as HTMLInputElement).value, "winery")
                  // }
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="rating">
          <form>
            <h3 className="text-background capitalize text-2xl mt-5 mb-2">
              rating
            </h3>
            <div className="listRadio flex items-center mb-1">
              <div>
                <input
                  type="radio"
                  id="rating1"
                  value="4.2"
                  className="absolute invisible cursor-pointer mr-2"
                  // checked={rating === "4.2" ? true : false}
                  // onChange={(e) =>
                  //   changeFilter((e.target as HTMLInputElement).value, "rating")
                  // }
                />
                <label htmlFor="rating1" className="flex">
                  <div className="ratingImgae">
                    {/* {ratingGreat.map((item, idx) => (
                      <img src={item} alt='ratingGreat' key={idx} />
                    ))} */}
                  </div>
                  <span className="text-background/70 font-bold ml-2">4.2+</span>
                </label>
                <label
                  htmlFor="rating1"
                  className="check block absolute border border-solid border-background rounded-full h-5 w-5 transition-colors cursor-pointer"
                ></label>
              </div>
              <div>
                <input
                  type="radio"
                  className="absolute invisible cursor-pointer mr-2"
                  id="rating2"
                  value="3.8"
                  // checked={rating === "3.8" ? true : false}
                  // onChange={(e) =>
                  //   changeFilter((e.target as HTMLInputElement).value, "rating")
                  // }
                />
                <label htmlFor="rating2" className="flex">
                  <div className="ratingImgae">
                    {/* {ratingGood.map((item, idx) => (
                      <img src={item} alt="ratingGood" key={idx} />
                    ))} */}
                  </div>
                  <span className="text-background/70 font-bold ml-2">3.8+</span>
                </label>
                <label
                  htmlFor="rating2"
                  className="check block absolute border border-solid border-background rounded-full h-5 w-5 transition-colors cursor-pointer"
                ></label>
              </div>
              <div>
                <input
                  type="radio"
                  className="absolute invisible cursor-pointer mr-2"
                  id="rating3"
                  value="3.6"
                  // checked={rating === "3.6" ? true : false}
                  // onChange={(e) =>
                  //   changeFilter((e.target as HTMLInputElement).value, "rating")
                  // }
                />
                <label htmlFor="rating3" className="flex">
                  <div className="ratingImgae">
                    {/* {ratingNormal.map((item, idx) => (
                      <img src={item} alt="ratingNormal" key={idx} />
                    ))} */}
                  </div>
                  <span className="text-background/70 font-bold ml-2">3.6+</span>
                </label>
                <label
                  htmlFor="rating3"
                  className="check block absolute border border-solid border-background rounded-full h-5 w-5 transition-colors cursor-pointer"
                ></label>
              </div>
              <div>
                <input
                  type="radio"
                  className="absolute invisible cursor-pointer mr-2"
                  id="rating4"
                  value="all"
                  // checked={rating === "all" ? true : false}
                  // onChange={(e) =>
                  //   changeFilter((e.target as HTMLInputElement).value, "rating")
                  // }
                />
                <label htmlFor="rating4" className="flex">
                  <p className="font-bold text-background/70 capitalize">Toutes les notes</p>
                </label>
                <label
                  htmlFor="rating4"
                  className="check block absolute border border-solid border-background rounded-full h-5 w-5 transition-colors cursor-pointer"
                ></label>
              </div>
            </div>
          </form>
        </div>
        <div className="price">
          <h3 className="text-background capitalize text-2xl mt-5 mb-2">
            Price
          </h3>
          <p className="text-lg font-bold text-background/70">$ {6}</p>
          <input
            type="range"
            value={7}
            min="0"
            // onChange={(e) => changeFilter(e.target.value, "price")}
            max={1000}
          />
        </div>

        <button className="btn clearFilter">Clear All</button>
      </div>
    </section>
  );
};

export default FilterProducts;

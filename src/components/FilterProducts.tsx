import React, { useLayoutEffect } from "react";

const FilterProducts = () => {

  const listWinery: any[] = []
  return (
    <section id="filterProduct">
      <div>
        <input
          type="text"
          placeholder="search"
          className="search"
          // value={search}
          // onChange={(e) => changeFilter(e.target.value, "search")}
        />
        <div className="winery">
          <h3>winery</h3>
          <div className="listWinery">
            {listWinery.map((item) => {
              return (
                <button
                  key={item}
                  className={`$
                    // item.toLowerCase() === winery.toLowerCase()
                    //   ? "activeWinery"
                    //   : null
                  `}
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
            <h3>rating</h3>
            <div className="listRadio">
              <div>
                <input
                  type="radio"
                  id="rating1"
                  value="4.2"
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
                  <span>4.2+</span>
                </label>
                <label htmlFor="rating1" className="check"></label>
              </div>
              <div>
                <input
                  type="radio"
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
                  <span>3.8+</span>
                </label>
                <label htmlFor="rating2" className="check"></label>
              </div>
              <div>
                <input
                  type="radio"
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
                  <span>3.6+</span>
                </label>
                <label htmlFor="rating3" className="check"></label>
              </div>
              <div>
                <input
                  type="radio"
                  id="rating4"
                  value="all"
                  // checked={rating === "all" ? true : false}
                  // onChange={(e) =>
                  //   changeFilter((e.target as HTMLInputElement).value, "rating")
                  // }
                />
                <label htmlFor="rating4" className="flex">
                  <p>Toutes les notes</p>
                </label>
                <label htmlFor="rating4" className="check"></label>
              </div>
            </div>
          </form>
        </div>
        <div className="price">
          <h3>Price</h3>
          <p>$ {6}</p>
          <input
            type="range"
            value={7}
            min="0"
            // onChange={(e) => changeFilter(e.target.value, "price")}
            max={1000}
          />
        </div>

        <button className="btn clearFilter" >
          Clear All
        </button>
      </div>
    </section>
  );
};


export default FilterProducts



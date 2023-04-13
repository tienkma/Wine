import React from "react";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const {
    state: { filterProduct, sort },
    changeSort,
  } = useFilterContext();
  return (
    <section id="sortContent">
      <p>{filterProduct.length} Products Found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          className="sort-input"
          onChange={(e) => changeSort(e.target.value)}
        >
          <option value="priceLowest">price (lowest)</option>
          <option value="priceHighest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;

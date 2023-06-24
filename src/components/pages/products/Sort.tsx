import React from "react";

const Sort = () => {
  // const {
  //   state: { filterProduct, sort },
  //   changeSort,
  // } = useFilterContext();
  return (
    <section
      id="sortContent "
      className="flex justify-between relative items-center"
    >
      <p className="text-background capitalize">{[].length} Products Found</p>
      <hr className="flex-1 border-x-none border-b-none border border-solid border-background" />
      <form>
        <label htmlFor="sort" className="text-base text-black capitalize">
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          className=" text-base capitalize py-0.5 pl-0.5 pr-7 border-0 focus:outline-none focus:ring-0 font-normal"
          // onChange={(e) => changeSort(e.target.value)}
          // value={sort}
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

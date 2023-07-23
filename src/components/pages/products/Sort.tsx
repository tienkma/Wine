import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import {
  changeSort,
  selectproductList,
  selectproductSort,
  selectproductSortBy,
} from "../../../redux/silces/productSlide";

const Sort = () => {
  const listProduct = useAppSelector(selectproductList);
  const sort = useAppSelector(selectproductSort);
  const sortBy = useAppSelector(selectproductSortBy);

  const dispatch = useAppDispatch();
  const onchangeSort = (value: string) => {
    const newSort = value.split("|");
    dispatch(changeSort({ sort: newSort[1], sortBy: newSort[0] }));
  };

  return (
    <section
      id="sortContent "
      className="flex justify-between relative items-center"
    >
      <p className="text-background capitalize text-sm sm:text-base">
        {listProduct?.length || 0} Products Found
      </p>
      <hr className="flex-1 border-x-none border-b-none border border-solid border-background mx-2" />
      <form>
        <label
          htmlFor="sort"
          className="text-sm sm:text-base text-black capitalize"
        >
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          className=" sm:text-base text-sm capitalize py-0.5 pl-0.5 pr-7 border-0 focus:outline-none focus:ring-0 font-normal"
          onChange={(e) => onchangeSort(e.target.value)}
          value={`${sortBy}|${sort}`}
        >
          <option value="price|asc">price (lowest)</option>
          <option value="price|des">price (highest)</option>
          <option value="wine|asc">name (a - z)</option>
          <option value="wine|des">name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;

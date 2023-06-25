import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  Slider,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import {
  changeFilter,
  clearFilter,
  selectproductFilter,
} from "../../../redux/silces/productSlide";
import { useForm } from "react-hook-form";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const listWinery = [
  "all",
  "Petrus",
  "Cartuxa",
  "Schrader",
  "Darioush",
  "Garbole",
  "Conterno",
  "Benziger",
  "Mollydooker",
  "Catena Zapata",
  "Promontory",
];

const FilterProducts = () => {
  const filterProduct = useAppSelector(selectproductFilter);
  const dispatch = useAppDispatch();
  const { formState, register, handleSubmit, setValue } = useForm();

  const { search, rating, price, maxPrice, winery } = filterProduct || {};
  const [priceRange, setPriceRange] = useState(price || maxPrice);

  useEffect(() => {
    setValue("search", search);
  }, [search]);

  useEffect(() => {
    setPriceRange(price);
  }, [price]);
  return (
    <section
      id="filterProduct"
      style={{ width: 250 }}
      className="flex-shrink-0 "
    >
      <div>
        <form
          onSubmit={handleSubmit((value) => {
            dispatch(changeFilter({ filter: value.search, key: "search" }));
          })}
        >
          <input
            type="text"
            placeholder="search"
            className="search w-full p-1 text-background border border-solid border-background rounded placeholder:capitalize placeholder:text-background"
            {...register("search")}
          />
        </form>
        <div className="winery">
          <h3 className="text-background capitalize text-2xl mt-5 mb-2">
            winery
          </h3>
          <div className="listWinery">
            {listWinery.map((wineryItem, idx) => {
              return (
                <button
                  className="bg-transparent outline-none border-0 !ring-0 text-[#0f1928]/70 block mr-auto capitalize mt-1.5 font-semibold text-base activeWinery"
                  value={wineryItem}
                  key={wineryItem}
                >
                  {wineryItem}
                </button>
              );
            })}
          </div>
        </div>
        <div className="rating">
          <h3 className="text-background capitalize text-2xl mt-5 mb-2">
            rating
          </h3>
          <div className="listRadio flex items-center mb-1">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="all"
              >
                <FormControlLabel
                  value="top"
                  sx={{ width: "100%" }}
                  control={
                    <Radio
                      sx={{
                        padding: "5px",
                        color: "#0d1928",
                        "&.Mui-checked": {
                          color: "#0d1928",
                        },
                      }}
                    />
                  }
                  label={
                    <Rating
                      className="my-1"
                      name="read-only"
                      icon={<AiFillStar color="#891826" />}
                      emptyIcon={<AiOutlineStar />}
                      value={5}
                      readOnly
                    />
                  }
                />
                <FormControlLabel
                  value="top"
                  sx={{ width: "100%" }}
                  control={
                    <Radio
                      sx={{
                        padding: "5px",
                        color: "#0d1928",
                        "&.Mui-checked": {
                          color: "#0d1928",
                        },
                      }}
                    />
                  }
                  label={
                    <Rating
                      className="my-1"
                      name="read-only"
                      icon={<AiFillStar color="#891826" />}
                      emptyIcon={<AiOutlineStar />}
                      value={4}
                      readOnly
                    />
                  }
                />
                <FormControlLabel
                  value="top 3"
                  sx={{ width: "100%" }}
                  control={
                    <Radio
                      sx={{
                        padding: "5px",
                        color: "#0d1928",
                        "&.Mui-checked": {
                          color: "#0d1928",
                        },
                      }}
                    />
                  }
                  label={
                    <Rating
                      className="my-1"
                      name="read-only"
                      icon={<AiFillStar color="#891826" />}
                      emptyIcon={<AiOutlineStar />}
                      value={3}
                      readOnly
                    />
                  }
                />
                <FormControlLabel
                  value="all"
                  sx={{ width: "100%" }}
                  control={
                    <Radio
                      sx={{
                        padding: "5px",
                        color: "#0d1928",
                        "&.Mui-checked": {
                          color: "#0d1928",
                        },
                      }}
                    />
                  }
                  label={"Toutes les notes"}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="price">
          <h3 className="text-background capitalize text-2xl mt-5 mb-2">
            Price
          </h3>
          <p className="text-lg font-bold text-background/70">$ {price}</p>
          <Slider
            defaultValue={maxPrice}
            aria-label="Default"
            max={maxPrice}
            value={priceRange}
            min={0}
            onChange={(e, value) => {
              setPriceRange(value);
            }}
            onChangeCommitted={(e, value) => {
              dispatch(changeFilter({ filter: value, key: "price" }));
            }}
            sx={{ color: "#0d1928", height: "8px" }}
          />
        </div>

        <button
          className="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-background rounded-lg focus:ring-4  hover:bg-color"
          onClick={() => {
            dispatch(clearFilter());
            setValue("search", "");
          }}
        >
          Clear All
        </button>
      </div>
    </section>
  );
};

export default FilterProducts;

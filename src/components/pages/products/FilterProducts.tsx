import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useLayoutEffect } from "react";

const FilterProducts = () => {
  const listWinery: any[] = [];
  return (
    <section
      id="filterProduct"
      style={{ width: 250 }}
      className="flex-shrink-0 min-h-screen"
    >
      <div>
        <input
          type="text"
          placeholder="search"
          className="search w-full p-1 text-background border border-solid border-background rounded placeholder:capitalize placeholder:text-background"
          // value={search}
          // onChange={(e) => changeFilter(e.target.value, "search")}
        />
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
                defaultValue="top"
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
                    <p className="text-background font-medium mb-0">Tien</p>
                  }
                />
                <FormControlLabel
                  value="top 1"
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
          <p className="text-lg font-bold text-background/70">$ {1000}</p>
          <Slider
            defaultValue={1000}
            aria-label="Default"
            max={1000}
            min={0}
            onChangeCommitted={() => {
              console.log("object");
            }}
            sx={{ color: "#0d1928", height: "8px" }}
          />
        </div>

        <button className="btn clearFilter">Clear All</button>
      </div>
    </section>
  );
};

export default FilterProducts;

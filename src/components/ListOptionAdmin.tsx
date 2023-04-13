import React from "react";
import { UseUserContext } from "../context/UserContext";
import { optionAdmin } from "../utils/optionAdmin";

const ListOptionAdmin = () => {

  const {state: {optionUser}} = UseUserContext()
  return (
    <section id="filterProduct">
      <div className="winery">
        <div className="listWinery">
          {/* {optionAdmin.map((item: string) => {
            return (
              <button
                key={item}
                className={`${
                  item.toLowerCase() === optionUser.toLowerCase()
                    ? "activeWinery"
                    : null
                }`}
                value={item}
                onClick={(e) =>
                  // changeFilter((e.target as HTMLInputElement).value, "winery")
                  console.log(e.target)
                }
              >
                {item}
              </button>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default ListOptionAdmin;

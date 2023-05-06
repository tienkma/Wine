import React from "react";
import { shopify } from "../utils/shopify";

const Shopify = () => {
  const classGrid = (idx: number) => {
    if(idx === 1 || idx === 3){
      return 'row-span-2 h-full hidden md:block'
    }
    return "col-span-2 h-full"
  }
  return (
    <section id="shopify">
      <div className="container mx-auto">
        <div className="imgListShopify grid md:grid-cols-3 grid-cols-2  gap-4">
          {shopify.map((item, idx) => (
            <img className={`${classGrid(idx)}`}  src={item.image} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopify;

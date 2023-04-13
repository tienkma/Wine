import React from "react";
import { shopify } from "../utils/shopify";

const Shopify = () => {
  const classGrid = (idx: number) => {
    if(idx === 1 || idx === 3){
      return 'row-span-2 h-full'
    }
    return "col-span-2 h-full"
  }
  return (
    <section id="shopify">
      <div className="container mx-auto">
        <div className="imgListShopify grid grid-cols-3  gap-4">
          {shopify.map((item, idx) => (
            <img className={`${classGrid(idx)}`}  src={item.image} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopify;

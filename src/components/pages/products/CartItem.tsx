import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Toasts } from "../../../utils/notification";

interface CartItemProps {
  id?: string;
  price?: string | number;
  wine?: string;
  image?: string;
  available?: string | number;
}

const CartItem = (props: CartItemProps) => {
  const { id, price, wine, image, available } = props;
  return (
    <article className="cart_item flex flex-col rounded-lg transition-all border-2 border-solid border-transparent hover:border-background" style={{maxWidth: 300}}>
      <div className="cart_item-image w-full cursor-pointer overflow-hidden h-72 flex items-center" style={{height: 300}}>
        <Link
          to={`/products/${id}`}
          className="imageItem w-full transition-all inline-block flex-shrink-0"
          style={{
            // background: `url(${image}) no-repeat top center`,
            height: '90%'
          }}
        >

        <img src={image} alt="wine" className=" object-contain" style={{height: '90%'}} />
        </Link>
      </div>
      <div className="cart_item-bottom p-3 pt-0 flex flex-col flex-1 justify-between overflow-hidden">
        <h4>{wine}</h4>
        <p className=" mb-5 font-bold text-background mt-auto">${price}</p>
        <button className="btn bg-background rounded px-4 py-2 hover:bg-color transition-colors" onClick={() => {}}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default CartItem;

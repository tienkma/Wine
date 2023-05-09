import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Toasts } from "../../../utils/notification";
import Quantity from "../../Quantity";

interface CartItemProps {
  wine?: any;
  id?: any;
  image?: any;
  price?: any;
  available?: any;
  amount?: any;
}

const CartItem = (props: CartItemProps) => {
  const { wine, id, image, price, available, amount } = props;
  return (
    <article className="grid-cols-[200px_auto_auto] grid grid-rows-[75px] gap-[3rem_1rem] justify-items-center mb-6 items-center md:grid-cols-[1fr_1fr_1fr_1fr_auto]">
      <div className="grid-cols-[75px_125px] grid grid-rows-[75px] items-center gap-4 md:grid-cols-[100px_200px] md:text-left">
        <img src={image} className="h-full block rounded-sm object-contain" alt={wine} />
        <div>
          <h5 className="name md:text-sm mb-0 text-sm font-medium">{wine}</h5>

          <h5 className="price-small md:hidden text-red-600 font-medium">${price}</h5>
        </div>
      </div>
      <h5 className="price hidden md:block text-base text-background font-normal">${price}</h5>
      <Quantity
        count={amount}
        decreAmount={() => {}}
        increAmuont={() => {}}
        id={id as string}
      />
      <h5 className="subtotal hidden md:block mb-0 text-background font-normal text-base">${price * amount}</h5>
      <button
        className="remove-btn text-white bg-red-700  w-6 h-6 center rounded text-sm cursor-pointer"
        // onClick={async () => {
        //   // bỏ
        //   setLoadingCart(true)
        //   removeItem(id as string);
        //   const data = await Requests.delete(`${URL_REQUEST}/api/v1/cart/${props._id}`)
        //   setLoadingCart(false)
        //   if(data?.error){
        //     return Toasts.error(data.error.msg)
        //   }
        //   Toasts.success("Delete Item!");
        // }}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;

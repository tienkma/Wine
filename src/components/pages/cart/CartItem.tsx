import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Toasts } from "../../../utils/notification";
import ChangeQuantity from "../../Quantity";
import { useAppDispatch } from "../../../redux/root/hooks";
import { removeItem } from "../../../redux/silces/cartSlide";
import { CartEntity } from "../../../models";

const CartItem = (props: CartEntity) => {
  const { wine, _id, image, price, available, quantity } = props;

  const dispatch = useAppDispatch();

  return (
    <article className="grid-cols-[200px_auto_auto] grid grid-rows-[75px] gap-[3rem_1rem] max-sm:gap-2 justify-items-center mb-6 items-center md:grid-cols-[316px_1fr_1fr_1fr_auto]">
      <div className="grid-cols-[75px_125px] grid grid-rows-[75px] items-center gap-4 max-sm:gap-0 md:grid-cols-[100px_200px] md:text-left">
        <img
          src={image}
          className="h-full block rounded-sm object-contain"
          alt={wine}
        />
        <div>
          <h5 className="name md:text-sm mb-0 text-sm font-medium">{wine}</h5>

          <h5 className="price-small md:hidden text-red-600 font-medium">
            ${price}
          </h5>
        </div>
      </div>
      <h5 className="price hidden md:block text-base text-background font-normal">
        ${price}
      </h5>
      <ChangeQuantity count={quantity} id={_id as string} />
      <h5 className="subtotal hidden md:block mb-0 text-background font-normal text-base">
        ${+price * quantity || ""}
      </h5>
      <button
        className="remove-btn text-white bg-red-700  w-6 h-6 center rounded text-sm cursor-pointer mr-6"
        onClick={() => dispatch(removeItem(_id))}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;

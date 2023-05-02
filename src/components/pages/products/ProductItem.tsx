import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Toasts } from "../../../utils/notification";
import Quantity from "../../Quantity";

interface ProductItemProps {
  wine?: any;
  id?: any;
  image?: any;
  price?: any;
  available?: any;
  amount?: any;
}

const ProductItem = (props: ProductItemProps) => {
  const { wine, id, image, price, available, amount } = props;
  return (
    <article>
      <div className="title">
        <img src={image} alt={wine} />
        <div>
          <h5 className="name">{wine}</h5>

          <h5 className="price-small">{price}</h5>
        </div>
      </div>
      <h5 className="price">${price}</h5>
      <Quantity
        count={amount}
        decreAmount={() => {}}
        increAmuont={() => {}}
        id={id as string}
      />
      <h5 className="subtotal">${price * amount}</h5>
      <button
        className="remove-btn"
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

export default ProductItem;

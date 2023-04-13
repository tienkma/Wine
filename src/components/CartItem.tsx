import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Toasts } from "../utils/notification";

interface CartItemProps {
  id?: string;
  price?: string;
  wine?: string;
  image?: string;
  available?: string;
}

const CartItem = (props: CartItemProps) => {
  const { id, price, wine, image, available } = props;
  return (
    <article className="cart_item">
      <div className="cart_item-image">
        <Link
          to={`/products/${id}`}
          className="imageItem"
          style={{
            background: `url(${image}) no-repeat top center`,
          }}
        />
      </div>
      <div className="cart_item-bottom">
        <h4>{wine}</h4>
        <p>${price}</p>
        <button className="btn" onClick={() => {}}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default CartItem;

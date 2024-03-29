import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Toasts } from "../../../utils/notification";
import { Rating } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductEntity } from "../../../models";
import { addCart } from "../../../redux/silces/cartSlide";
import { useAppDispatch } from "../../../redux/root/hooks";
import { omit } from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProductItemProps extends ProductEntity {
  className?: string;
}

const ProductItem = (props: ProductItemProps) => {
  const {
    _id,
    price,
    wine,
    image,
    available,
    className,
    discount,
    rating,
    winery,
  } = props;

  const dispatch = useAppDispatch();

  return (
    <article
      className={`max-w-xs flex flex-col rounded-lg transition-all border-2 border-solid border-transparent hover:border-background ${
        className || ""
      }`}
    >
      <div
        className=" w-full cursor-pointer overflow-hidden h-72 flex items-center"
        style={{ height: 300 }}
      >
        <Link
          to={`/products/${_id}`}
          className=" w-full transition-all inline-block flex-shrink-0"
          style={{
            // background: `url(${image}) no-repeat top center`,
            height: "90%",
          }}
        >
          <LazyLoadImage
            src={image}
            alt="wine"
            className=" object-contain"
            style={{ height: "90%" }}
          />
        </Link>
      </div>
      <div className="cart_item-bottom p-3 pt-0 flex flex-col flex-1 justify-between overflow-hidden select-none">
        <h4 className="text-sm font-bold mb-2 ">{wine}</h4>
        <div className=" mb-5  mt-auto">
          <h3 className="text-sm font-medium mb-0">{winery}</h3>
          <Rating
            className="my-1"
            name="read-only"
            icon={<AiFillStar color="#891826" />}
            emptyIcon={<AiOutlineStar />}
            value={+rating?.average || 0}
            readOnly
          />
          {discount ? (
            <>
              <div className="flex items-center">
                <p className="mr-2 text-base font-semibold text-gray-900 dark:text-white">
                  ${(+price * (100 - +discount)) / 100}
                </p>
                <p className="text-sm  font-medium text-gray-500 line-through dark:text-gray-300">
                  ${price}
                </p>
                <p className="ml-auto text-sm font-medium text-red-500">
                  {discount}% off
                </p>
              </div>{" "}
            </>
          ) : (
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              ${price}
            </p>
          )}
        </div>
        <button
          className="btn bg-background rounded px-4 py-2 hover:bg-color transition-colors"
          onClick={() =>
            dispatch(addCart(omit({ ...props, quantity: 1 }, "className")))
          }
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;

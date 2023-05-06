import { Link, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { Toasts } from "../utils/notification";
import { useLayoutEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import ProductItem from "../components/pages/products/ProductItem";
import { FaTrash } from "react-icons/fa";
import Quantity from "../components/Quantity";
import {
  Box,
} from "@mui/material";
import { RouterName } from "../routers/RouterName";

const CartPage = () => {
  const params = useParams();
  // const { getListCart } = useCartContext();

  // const {
  //   state: { listCart, shippingFee, totalCart, loading_cart },
  //   clearCart,
  // } = useCartContext();
  const [valueInput, setValueInput] = useState("");
  const [coupon, setCoupon] = useState("");
  const [listCart, setListCart] = useState([
    {
      winery: "Cartuxa",
      wine: "Pera-Manca Tinto 1990",
      rating: {
        average: 5,
        reviews: "72 ratings",
      },

      image:
        "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      price: 100,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
      id: "3",
      available: 9,
      amount: 9,
    },
  ]);

  // const {
  //   state: { isLogin },
  // } = useHomeContact();

  return (
    <main id="cartPage" className="relative ">
      <PageHero title="cart" />
      <div className="container mx-auto pb-9">
        {listCart.length < 1 ? (
          <div
            className="cartEmpty flex items-center justify-center flex-col mt-24"
            style={{ height: "calc(100% - 170px)" }}
          >
            <h1 className="text-center">Your cart is empty</h1>
            <Link to="/products" className="btn mt-8 px-2 py-10 uppercase">
              Fill it
            </Link>
          </div>
        ) : (
          <div className="container mx-auto mt-10">
            <div className="flex my-10 items-baseline  gap-10">
              <div className="flex-1 bg-white">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">3 Items</h2>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 ml-3">
                    Product Details
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Price
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Total
                  </h3>
                </div>
                <div className="flex items-center hover:bg-gray-100   py-5">
                  <div className="flex w-2/5 ml-3">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">Iphone 6S</span>
                      <span className="text-red-500 text-xs">Apple</span>
                      <a
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value="1"
                    />

                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $400.00
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $400.00
                  </span>
                </div>

                

                <Link
                  to={RouterName.PRODUCTS}
                  className="flex font-semibold text-blue-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-blue-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              <Box  className=" p-4 md:p-6 lg:p-8 min-w-[400px]  rounded-lg" sx={{background: '#f4f4f5'}}>
                <h2 className="font-medium text-lg  mb-3">
                  Order Summary
                </h2>
                <div className="divide-y">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500 my-3">
                    Subtotal
                    </span>
                    <span className="text-sm my-3 font-medium">
                      $129.4
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500 my-3">
                    Shipping estimate
                    </span>
                    <span className="text-sm my-3 font-medium">
                      $129.4
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500 my-3">
                    Tax estimate
                    </span>
                    <span className="text-sm my-3 font-medium">
                      $129.4
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base text-black my-3 font-medium">
                    Order total
                    </span>
                    <span className="text-base my-3 font-medium">
                      $129.4
                    </span>

                  </div> 
                </div>
                  <button className="bg-background font-semibold hover:bg-color transition-colors py-3 text-sm text-white uppercase w-full rounded-md">
                    Checkout
                  </button>
              </Box>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;

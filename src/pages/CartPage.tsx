import { Link, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { Toasts } from "../utils/notification";
import { useLayoutEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import CartItem from "../components/pages/cart/CartItem";
import { Button } from "@mui/material";

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
            className=" flex items-center justify-center flex-col mt-24"
            style={{ height: "calc(100% - 170px)" }}
          >
            <h1 className="text-center">Your cart is empty</h1>
            <Link to="/products" className="btn mt-8 px-2 py-10 uppercase">
              Fill it
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-9">
              <div className="listCart mb-9">
                <div className="cartColumn hidden md:block ">
                  <div className="content grid justify-items-center gap-4 grid-cols-[316px_1fr_1fr_1fr_auto]">
                    <h5 className="text-[#617d98] font-normal text-lg">Item</h5>
                    <h5 className="text-[#617d98] font-normal text-lg">
                      Price
                    </h5>
                    <h5 className="text-[#617d98] font-normal text-lg">
                      Quantity
                    </h5>
                    <h5 className="text-[#617d98] font-normal text-lg">
                      Subtotal
                    </h5>
                    <span className="h-8 w-8"></span>
                  </div>
                  <hr className="mt-2 mb-12" />
                </div>
                {listCart.map((item: any) => (
                  <CartItem key={item.id} {...item} />
                ))}
                <hr className="mb-5" />
                <div className="link-container flex justify-between">
                  <Link className="btn text-sm" to="/products">
                    continue shopping
                  </Link>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      // clearCart();
                    }}
                  >
                    clear shopping cart
                  </button>
                </div>
              </div>
              <section className="totalCart flex w-full">
                <div className="ml-auto max-sm:w-full">
                  <article className="p-12 border border-background rounded-lg w-[400px] max-sm:w-full ">
                    <h5 className="grid grid-cols-[200px_1fr] capitalize text-lg max-sm:grid-cols-[150px 1fr]">
                      subtotal :<span>${"totalCart"}</span>
                    </h5>
                    <p className="grid grid-cols-[200px_1fr] capitalize text-lg max-sm:grid-cols-[150px 1fr]">
                      shipping fee :<span>${"shippingFee"}</span>
                    </p>

                    <hr className="my-5" />
                    <div className="coupon center mb-2.5">
                      <IoIosPricetags />
                      <span className="flex-1 ml-2.5">apply coupon</span>
                    </div>
                    <form className="flex items-center mb-2.5">
                      <input
                        type="text"
                        className="max-sm:py-3 flex-1 p-3 outline-none border border-background"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        placeholder="Enter Coupon"
                      />
                      <Button
                        className="bg-background text-white hover:bg-color"
                        onClick={() => setCoupon(valueInput)}
                      >
                        Apply
                      </Button>
                    </form>
                    <hr />
                    <h4 className="grid grid-cols-[200px_1fr] capitalize text-lg max-sm:grid-cols-[150px_1fr]">
                      order total :
                      {coupon == "TWINE50" ? (
                        <p className="d-flex font-16 align_items justify-content-end">
                          <span className="couponTotal align_items d-flex max-sm:relative max-sm:w-auto">
                            ${`totalCart + shippingFee`}
                          </span>{" "}
                          ${+`totalCart + shippingFee` / 2}
                        </p>
                      ) : (
                        <span className="d-flex align_items justify-content-end">
                          ${`totalCart + shippingFee`}
                        </span>
                      )}
                    </h4>
                    <Link
                      to="#"
                      className="checkOut btn p-2 center"
                      onClick={async () => {
                        // if(getLocal("users").roles != "user"){
                        //   return;
                        // }
                        // if(!(getLocal("users").address && getLocal("users").numberPhone)){
                        //     Toasts.error("Please enter more information")
                        //     return  history.push('/user')
                        // }
                        // try {
                        //   const data = await Requests.post(
                        //     `${URL_REQUEST}/api/v1/order/user`,
                        //     {
                        //       total: (coupon == "TWINE50" ) ? (totalCart + shippingFee) / 2 : totalCart + shippingFee,
                        //       cart: JSON.stringify(listCart),
                        //       email: getLocal("users").email,
                        //     }
                        //     );
                        //     if(data.order){
                        //       // Toasts.success("")
                        //       clearCart(false)
                        //       history.push('/user', "order")
                        //     }
                        //   } catch (error: any) {
                        //     Toasts.error(error?.message)
                        //   }
                      }}
                    >
                      {/* {isLogin ? getLocal("users").roles != "user" ? getLocal("users").roles :  "proceed to checkout" : "Login"} */}
                      Login
                    </Link>
                  </article>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default CartPage;

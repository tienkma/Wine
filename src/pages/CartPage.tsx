import { Link, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { Toasts } from "../utils/notification";
import { useLayoutEffect, useState } from "react";
import PageHero from "../components/PageHero";
import ProductItem from "../components/ProductItem";

const CartPage = () => {
  const params = useParams();
  // const { getListCart } = useCartContext();

  // const {
  //   state: { listCart, shippingFee, totalCart, loading_cart },
  //   clearCart,
  // } = useCartContext();
  const [valueInput, setValueInput] = useState("");
  const [coupon, setCoupon] = useState("");
  const [listCart, setListCart] = useState([{id: 3, wite: 7, }])

  // const {
  //   state: { isLogin },
  // } = useHomeContact();

  return (
    <main id="cartPage">
      <PageHero title="cart" />
      {listCart.length < 1 ? (
        <div className="cartEmpty">
          <h1>Your cart is empty</h1>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      ) : (
        <div className="cartContent container">
          <div className="listCart">
            <div className="cartColumn">
              <div className="content">
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
              </div>
              <hr />
            </div>
            {listCart.map((item: any) => (
              <ProductItem key={item.id} {...item} />
            ))}
            <hr />
            <div className="link-container">
              <Link className="btn" to="/products">
                continue shopping
              </Link>
              <button
                type="button"
                className="btn"
                // onClick={() => {
                //   clearCart();
                // }}
              >
                clear shopping cart
              </button>
            </div>
          </div>
          <section className="totalCart">
            <div>
              <article>
                <h5>
                  subtotal :<span>${"totalCart"}</span>
                </h5>
                <p>
                  shipping fee :<span>${"shippingFee"}</span>
                </p>

                <hr />
                <div className="coupon">
                  <IoIosPricetags />
                  <span>apply coupon</span>
                </div>
                <form>
                  <input
                    type="text"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    placeholder="Enter Coupon"
                  />
                  <button type="button" onClick={() => setCoupon(valueInput)}>
                    Apply
                  </button>
                </form>
                <hr />
                <h4>
                  order total :
                  {coupon == "TWINE50" ? (
                    <p className="d-flex font-16 align_items justify-content-end">
                      <span className="couponTotal align_items d-flex ">
                        ${"totalCart + shippingFee"}
                      </span>{" "}
                      ${(7) / 2}
                    </p>
                  ) : (
                    <span className="d-flex align_items justify-content-end">
                      ${"totalCart + shippingFee"}
                    </span>
                  )}
                </h4>
                <Link
                  to="#"
                  className="checkOut btn"
                  // onClick={async () => {
                  //   if(getLocal("users").roles != "user"){
                  //     return;
                  //   }
                  //   if(!(getLocal("users").address && getLocal("users").numberPhone)){
                  //       Toasts.error("Please enter more information")
                  //       return  history.push('/user')

                  //   }

                  //   try {
                  //     const data = await Requests.post(
                  //       `${URL_REQUEST}/api/v1/order/user`,
                  //       {
                  //         total: (coupon == "TWINE50" ) ? (totalCart + shippingFee) / 2 : totalCart + shippingFee,
                  //         cart: JSON.stringify(listCart),
                  //         email: getLocal("users").email,
                  //       }
                  //       );
                  //       if(data.order){
                  //         // Toasts.success("")
                  //         clearCart(false)
                  //         history.push('/user', "order")
                  //       }
                  //     } catch (error: any) {
                  //       Toasts.error(error?.message)
                  //     }

                  // }}
                >
                  {/* {isLogin ? getLocal("users").roles != "user" ? getLocal("users").roles :  "proceed to checkout" : "Login"} */}
                </Link>
              </article>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default CartPage;

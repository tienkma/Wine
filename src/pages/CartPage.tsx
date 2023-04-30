import { Link, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { Toasts } from "../utils/notification";
import { useLayoutEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import ProductItem from "../components/pages/products/ProductItem";
import { FaTrash } from "react-icons/fa";
import Quantity from "../components/Quantity";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
          <div className="cartContent mt-10">
            <div className="listCart mb--10">
              {/* <div className="cartColumn ">
                <div
                  className="content grid items-center gap-4"
                  style={{ gridTemplateColumns: "316px 1fr 1fr 1fr auto" }}
                >
                  <h5 className="font-normal text-lg text-slate-500">item</h5>
                  <h5 className="font-normal text-lg text-slate-500">price</h5>
                  <h5 className="font-normal text-lg text-slate-500">
                    quantity
                  </h5>
                  <h5 className="font-normal text-lg text-slate-500">
                    subtotal
                  </h5>
                  <span className="w-0.5 h-0.5"></span>
                </div>
                <hr className="mt-2 mb-12" />
              </div> */}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="font-normal text-lg text-slate-500">
                        item
                      </TableCell>
                      <TableCell className="font-normal text-lg text-slate-500">
                        price
                      </TableCell>
                      <TableCell className="font-normal text-lg text-slate-500">
                        quantity
                      </TableCell>
                      <TableCell className="font-normal text-lg text-slate-500">
                        subtotal
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listCart.map((item) => (
                      <TableRow
                        key={item.id}
                        className="h-20"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <div className="title flex h-full">
                            <img
                              className="h-full max-h-24 object-contain block w-24"
                              src={item.image}
                              alt={item.wine}
                            />
                            <div className="text-left flex flex-col justify-center">
                              <h5 className="name text-sm text-black font-medium">
                                {item.wine}
                              </h5>
                              <h5 className="price-small hidden">
                                {item.price}
                              </h5>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                          {" "}
                          <Quantity
                            count={item.amount}
                            decreAmount={() => {}}
                            increAmuont={() => {}}
                            id={(item.id as string) || ""}
                          />
                        </TableCell>
                        <TableCell>${item.price * item.amount}</TableCell>
                        <TableCell>
                          <button className="remove-btn">
                            <FaTrash className="text-red-600" />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <hr className="mb-5" />
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
            <section className="totalCart w-full flex justify-end">
                <article className="p-12 border border-solid border-background rounded-lg w-96">
                  <h5
                    className="grid capitalize text-lg"
                    style={{ gridTemplateColumns: "200px 1fr" }}
                  >
                    subtotal :<span>${"totalCart"}</span>
                  </h5>
                  <p
                    className="grid capitalize text-lg"
                    style={{ gridTemplateColumns: "200px 1fr" }}
                  >
                    shipping fee :<span>${"shippingFee"}</span>
                  </p>

                  <hr className="my-5" />
                  <div className="coupon flex justify-center items-center mb-2">
                    <IoIosPricetags />
                    <span className="flex-1 ml-2">apply coupon</span>
                  </div>
                  <form className="flex items-center mb-2">
                    <input
                      type="text"
                      className="flex-1 p-3 outline-none border border-background border-solid"
                      value={valueInput}
                      onChange={(e) => setValueInput(e.target.value)}
                      placeholder="Enter Coupon"
                    />
                    <button
                      type="button"
                      className="px-3 py-4 bg-background text-white"
                      onClick={() => setCoupon(valueInput)}
                    >
                      Apply
                    </button>
                  </form>
                  <hr className="my-5" />
                  <h4
                    className="grid capitalize text-lg"
                    style={{ gridTemplateColumns: "200px 1fr" }}
                  >
                    order total :
                    {coupon == "TWINE50" ? (
                      <p className="d-flex font-16 align_items justify-content-end">
                        <span className="couponTotal align_items d-flex ">
                          ${"totalCart + shippingFee"}
                        </span>{" "}
                        ${7 / 2}
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
                    login
                  </Link>
                </article>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;

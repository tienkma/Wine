import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { Toasts } from "../utils/notification";
import { useEffect, useLayoutEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import CartItem from "../components/pages/cart/CartItem";
import { Button } from "@mui/material";
import { useAppSelector } from "../redux/root/hooks";
import { selectcartList } from "../redux/silces/cartSlide";
import { Storage } from "../utils/local";
import { RouterName } from "../routers/RouterName";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import LoadingPage from "../components/common/LoadingPage";
import { selectIsLogin } from "../redux/silces/authSlice";

const CartPage = () => {
  const [valueInput, setValueInput] = useState("");
  const [coupon, setCoupon] = useState("");
  const listCart = useAppSelector(selectcartList) || [];
  const isLogin = useAppSelector(selectIsLogin);

  const navigate = useNavigate();

  useEffect(() => {
    Storage.setLocal("carts", JSON.stringify(listCart));
  }, [listCart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="cartPage" className="relative ">
      <PageHero title="cart" />
      <LoadingPage loading={false} footer={true}>
        <div className="container mx-auto pb-9 minHeight">
          {listCart.length < 1 ? (
            <div
              className=" flex items-center justify-center flex-col mt-24"
              style={{ height: "calc(100% - 170px)" }}
            >
              <h1 className="text-center text-4xl font-bold text-[#102a42] mb-4">
                Your cart is empty
              </h1>
              <Link
                to={RouterName.PRODUCTS}
                className="rounded-md border border-transparent  text-sm bg-background px-10 py-2 font-medium text-white shadow-sm hover:bg-color transition-colors tracking-widest"
              >
                FILL IT
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-9">
                <div className="listCart mb-9">
                  <div className="cartColumn hidden md:block ">
                    <div className="content grid justify-items-center gap-4 grid-cols-[316px_1fr_1fr_1fr_auto]">
                      <h5 className="text-[#617d98] font-normal text-lg">
                        Item
                      </h5>
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
                  {listCart?.map((item: any) => (
                    <CartItem key={item.id} {...item} />
                  ))}
                  <hr className="mb-10" />
                  <div className="flex justify-between">
                    <Link
                      to={RouterName.PRODUCTS}
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                    >
                      <svg
                        className="fill-current mr-2 text-indigo-600 w-4"
                        viewBox="0 0 448 512"
                      >
                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                      </svg>
                      Continue Shopping
                    </Link>
                    <button
                      onClick={() => {
                        if (isLogin) {
                          navigate(RouterName.CHECKOUT);
                        } else {
                          navigate(RouterName.LOGIN, {
                            state: RouterName.CART,
                          });
                        }
                      }}
                      className="rounded-md border border-transparent bg-background px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-color transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </LoadingPage>
    </main>
  );
};

export default CartPage;

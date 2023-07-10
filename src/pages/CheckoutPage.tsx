import { useEffect, useState } from "react";
import LoadingPage from "../components/common/LoadingPage";
import PageHero from "../components/common/PageHero";
import { FormShippingAddress } from "../components/pages/checkout/FormShippingAddress";
import { CartEntity } from "../models";
import { Storage } from "../utils/local";

export const CheckoutPage = () => {
  const listCart: CartEntity[] = Storage.getLocal("carts") || [];
  const [checkoutCart, setCheckourCart] = useState(listCart)

  useEffect(() => {
    setCheckourCart(checkoutCart)
  }, [checkoutCart])

  return (
    <main className="minHeight">
      <PageHero title="Checkout" />
      <LoadingPage loading={false} footer={true}>
        <div className="container p-12 mx-auto mb-16">
          <div className="flex flex-col w-full px-0 mx-auto gap-8 md:flex-row">
            <div className="flex flex-col md:w-full">
              <h2 className="mb-4 font-bold md:text-xl text-heading ">
                Shipping Address
              </h2>
              <FormShippingAddress />
            </div>
            <div className="flex flex-col w-full ml-0 lg:w-2/5">
              <div className="pt-12 md:pt-0 2xl:ps-4">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="mt-8">
                  <div className="flex flex-col space-y-4 ">
                    {checkoutCart.map((cart) => {
                      return (
                        <div
                          className="flex space-x-4 justify-between"
                          key={cart._id}
                        >
                          <div className="flex">
                            <div className=" mr-4">
                              <img
                                src={cart.image}
                                alt="image"
                                className="h-24 object-contain"
                              />
                            </div>
                            <div>
                              <h2 className="text-lg font-bold">{cart.wine}</h2>
                              <p className="text-sm">{cart.winery}</p>
                              <p className="font-medium">
                                <span className="text-red-600 font-normal">
                                  Price
                                </span>{" "}
                                ${cart.subtotal}
                              </p>
                            </div>
                          </div>
                          <div>
                            <span onClick={() => {
                              setCheckourCart((props) => props.filter((item) => item._id !== cart._id))
                            }} className="cursor-pointer">

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                                </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex py-4 mt-4">
                  <h2 className="text-xl font-bold">
                    ITEMS {checkoutCart?.length}
                  </h2>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                  Subtotal<span className="ml-2">$40.00</span>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                  Shipping Tax<span className="ml-2">$10</span>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                  Total<span className="ml-2">$50.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingPage>
    </main>
  );
};

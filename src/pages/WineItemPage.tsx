import React, { useEffect, useLayoutEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { Comments } from "../components/pages/products/Comments";
import LoadingPage from "../components/common/LoadingPage";
import ProductItem from "../components/pages/products/CartItem";
import CarouselComponent from "../components/pages/products/Carousel";
import { useAppDispatch, useAppSelector } from "../redux/root/hooks";
import {
  getWine,
  selectWineData,
  selectWineLoading,
  selectWineError,
  getRelatedProduct,
  selectRelatedProduct,
  selectRelatedLoading,
  getListComment,
} from "../redux/silces/wineSlide";
import { ProductEntity } from "../models";
import { addCart } from "../redux/silces/cartSlide";
import { RouterName } from "../routers/RouterName";

const WineItemPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const wineData: ProductEntity | Record<string, any> =
    useAppSelector(selectWineData) || {};
  const isLoading = useAppSelector(selectWineLoading);
  const relateProductData = useAppSelector(selectRelatedProduct);
  const relatedLoading = useAppSelector(selectRelatedLoading);
  const isError = useAppSelector(selectWineError);

  useEffect(() => {
    dispatch(getWine(id));
    dispatch(getRelatedProduct());
    dispatch(
      getListComment({
        filter: { productId: id },
        params: { limit: 20, page: 1 },
      })
    );
  }, [id]);

  const {
    wine,
    winery,
    price,
    description,
    available,
    rating,
    image,
    discount,
  } = wineData;

  const [count, setCount] = useState(1);
  const navigator = useNavigate();

  const decreAmount = () => {
    setCount((count) => {
      let newCount = count - 1;
      if (newCount < 1) {
        return 1;
      }
      return newCount;
    });
  };
  const increAmuont = () => {
    setCount((count) => {
      let newCount = count + 1;
      if (newCount > available) {
        return available;
      }
      return newCount;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="itemPage" className="minHeight">
      <LoadingPage
        loading={isLoading}
        className="absolute w-1/2 h1/2 translate-x-1/2 translate-y-1/2"
        error={isError}
      >
        <>
          <PageHero title="products" product={wine || ""} />
          <div className="container  mx-auto ">
            <section
              className="itemPage grid gap-10 pt-7 pb-16"
              style={{ gridTemplateColumns: "400px 1fr" }}
            >
              <div className="img" style={{ height: 450 }}>
                <img
                  className="h-full object-contain"
                  src={
                    image ||
                    "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png"
                  }
                  alt="wine"
                />
              </div>
              <div className="itemContent flex flex-col">
                <h1 className="text-3xl mb-2 text-background capitalize">
                  {wine}
                </h1>
                <h3 className="text-lg mb-1 capitalize text-background/90">
                  {winery}
                </h3>
                {discount ? (
                  <div className="flex items-center relative">
                    <p className="mr-2 text-xl font-semibold text-color dark:text-white">
                      ${(price * (100 - +discount)) / 100}
                    </p>
                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                      ${price}
                    </p>
                    <p className=" text-base font-medium text-red-500 ">
                      (-{discount}%)
                    </p>
                  </div>
                ) : (
                  <p className="price text-color text-xl font-bold">${price}</p>
                )}

                {/* <Rating average={rating.average} reviews={rating.reviews} /> */}
                <Rating
                  className="my-4"
                  name="read-only"
                  icon={<AiFillStar color="#891826" />}
                  emptyIcon={<AiOutlineStar />}
                  value={rating?.average}
                  readOnly
                />
                <p
                  className="description text-background/80 font-15  mb-5"
                  style={{ lineHeight: 2 }}
                >
                  {description}
                </p>
                <hr className="mt-3 my-7" />
                {/* <AddToCard
                  decreAmount={decreAmount}
                  increAmuont={increAmuont}
                  count={count}
                  id={id || ""}
                /> */}
                <div className="flex items-center">
                  <div className="flex items-center border border-gray-200 rounded">
                    <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 center cursor-pointer"
                      onClick={decreAmount}
                      disabled={count === 1}
                    >
                      <AiOutlineMinus />
                    </button>

                    <input
                      type="number"
                      id="quantity"
                      className="h-10 w-16 !border-transparent font-normal text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none focus:ring-transparent "
                      value={count}
                      defaultValue={1}
                      min={1}
                      max={available}
                      onChange={(e) => {
                        setCount(+e.target.value || 1);
                      }}
                    />

                    <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 center cursor-pointer"
                      disabled={count === available}
                      onClick={increAmuont}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <p className="text-slate-500 ml-3">
                    {available} products available
                  </p>
                </div>
                <div className="flex">
                  <button
                    className="mt-5 flex px-12 py-3 capitalize text-sm justify-center items-center transition-colors hover:bg-color bg-background"
                    onClick={() => {
                      dispatch(addCart({ ...wineData, quantity: count }));
                      navigator(RouterName.CART);
                    }}
                  >
                    add to cart
                  </button>

                  <Link
                    to={RouterName.CHECKOUT}
                    state={{
                      productCheckout: [
                        {
                          ...wineData,
                          quantity: count,
                          subtotal: +price * count,
                        },
                      ],
                    }}
                    className="mt-5 ml-4 flex px-12 py-3 capitalize  text-sm justify-center items-center transition-colors hover:bg-color bg-transparent hover:border-color border-background text-background hover:text-white border font-medium"
                  >
                    checkout
                  </Link>
                </div>
              </div>
            </section>
            <hr />
            <Comments />
            <hr />
            <LoadingPage loading={relatedLoading}>
              {relateProductData?.length ? (
                <CarouselComponent
                  listItem={relateProductData}
                  lable="Related Product"
                />
              ) : (
                <></>
              )}
            </LoadingPage>
          </div>
        </>
      </LoadingPage>
    </main>
  );
};

export default WineItemPage;

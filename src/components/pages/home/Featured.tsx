import { Link } from "react-router-dom";
import { relatedProduct } from "../../../pages/WineItemPage";
import ProductItem from "../products/CartItem";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import {
  getListProduct,
  homeSlice,
  selectHomeList,
  selectHomeLoading,
  selectHomeError,
} from "../../../redux/silces/homeSlide";
import LoadingPage from "../../common/LoadingPage";
import { useEffect } from "react";

export const Featured = () => {
  const featuredProducts = useAppSelector(selectHomeList);
  const isLoading = useAppSelector(selectHomeLoading);
  const isError = useAppSelector(selectHomeError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListProduct({}));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="center">
        <h1 className=" text-center mt-8 text-3xl font-bold relative inline-block before:h-1 before:bg-background before:w-4/5 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
          Featured Products
        </h1>
      </div>
      <LoadingPage loading={isLoading} footer={false} className="py-10">
        {featuredProducts?.length || !isError ? (
          <>
            <div className="listProduct grid gap-3 mt-7 mb-14 grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xl:grid-cols-4">
              {featuredProducts?.map((item, idx) => (
                <ProductItem
                  key={idx}
                  {...item}
                  className="mx-auto w-full mt-6"
                />
              ))}
            </div>
            <div className=" mb-10 center">
              <Link
                to="/products"
                className="bg-background text-white px-8 py-2 tracking-wider rounded-[4px] hover:bg-color transition-colors capitalize"
              >
                All Products
              </Link>
            </div>
          </>
        ) : (
          <h3 className="text-center text-red-400">No Data available</h3>
        )}
      </LoadingPage>
    </div>
  );
};

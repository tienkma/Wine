import React from "react";
import { Loading } from "../../index";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { relatedProduct } from "../../../pages/WineItemPage";
import ProductItem from "../products/CartItem";

const Featured = () => {
  // const {
  //   state: { home_featured, home_loading, home_error },
  // } = useHomeContact();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    small: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const home_loading: boolean = false;
  const home_featured: any[] = [];
  return (
    <div id="featured" className="container mx-auto">
      <h1>Featured Products</h1>
      {home_loading ? (
        <Loading />
      ) : (
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
          {relatedProduct.concat(relatedProduct).map((item: any) => (
            <ProductItem className="mx-auto h-full" key={item.id} {...item} />
          ))}
        </Carousel>
      )}
      <Link to="/products" className="btn">
        All Products
      </Link>
    </div>
  );
};

export default Featured;

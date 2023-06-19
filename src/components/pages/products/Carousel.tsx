import React from "react";
import { Loading } from "../../index";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./CartItem";
import { ProductEntity } from "../../../models";

interface CarouselProps {
  lable: string;
  listItem: ProductEntity[];
}

const CarouselComponent = (props: CarouselProps) => {
  const { lable, listItem } = props;

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

  return (
    <div id="Carousel" className="container mx-auto my-10">
      <div className="flex justify-center">
        <h1 className="text-center mb-12 mt-4 text-3xl font-bold relative inline-block before:h-1 before:bg-background before:w-4/5 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
          {lable}
        </h1>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="className"
        containerClass="container-with-dots"
        dotListClass="dotListClass"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="itemClass"
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
        sliderClass="sliderClass"
        slidesToSlide={1}
        swipeable
      >
        {listItem.map((item: any) => (
          <ProductItem className="mx-auto h-full" key={item._id} {...item} />
        ))}
      </Carousel>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </div>
  );
};

export default CarouselComponent;

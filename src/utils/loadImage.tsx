import React from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps extends LazyLoadImageProps {
  src: string;
  alt?: string;
}

export const LazyImage = (props: LazyImageProps) => (
  <LazyLoadImage
    {...props}
    alt={props.alt || ""}
    effect="blur"
    src={props.src}
  />
);

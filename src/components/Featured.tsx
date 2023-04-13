import React from "react";
import { CartItem, Loading } from "./index";
import { Link } from "react-router-dom";

const Featured = () => {
  // const {
  //   state: { home_featured, home_loading, home_error },
  // } = useHomeContact();
const home_loading: boolean  = false;
const home_error = {};
  const home_featured: any[] = [];
  return (
    <div id="featured" className="container">
      <h1>Featured Products</h1>
      {home_loading ? (
        <Loading />
      ) : home_error ? (
        "error"
      ) : (
        <div className="listFeatured">
          {home_featured.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      <Link to="/products" className="btn">
        All Products
      </Link>
    </div>
  );
};

export default Featured;

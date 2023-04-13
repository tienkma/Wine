import React from "react";
import { Link } from "react-router-dom";

const PageHero: React.FC<{ title: string; product?: string }> = (props) => {
  const { title, product } = props;
  return (
    <div className="container bk">
      <div id="pageHero">
        {product ? (
          <h2>
            <Link to="/">Home</Link> / <Link to="/products"> product</Link> /{" "}
            {`${product}`}
          </h2>
        ) : (
          <h2>
            <Link to="/">Home</Link> /{" "}
            <Link to={`/${title}`}>{`${title}`}</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default PageHero;

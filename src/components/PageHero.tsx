import React from "react";
import { Link } from "react-router-dom";

const PageHero: React.FC<{ title: string; product?: string }> = (props) => {
  const { title, product } = props;
  return (
    <div className=" w-full flex justify-start px-16 py-6" style={{background: '#d7b5a5'}}>
      <div id="pageHero">
        {product ? (
          <h2 className="text-2xl font-semibold"> 
            <Link className="text-background" to="/">Home</Link> / <Link className="text-background" to="/products"> product</Link> /{" "}
            {`${product}`}
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold">
            <Link className="text-background" to="/">Home</Link> /{" "}
            <Link className="text-background" to={`/${title}`}>{`${title}`}</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default PageHero;

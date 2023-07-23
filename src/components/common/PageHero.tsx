import React from "react";
import { Link } from "react-router-dom";
import { RouterName } from "../../routers/RouterName";

const PageHero: React.FC<{ title: string; product?: string }> = (props) => {
  const { title, product } = props;
  return (
    // <div className=" w-full flex justify-start px-16 py-6">
    <>
      <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap container mx-auto mt-4">
        <Link
          to="/"
          className="text-gray-600 dark:text-gray-200 flex hover:underline sm:text-base text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </Link>

        <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>
        {product ? (
          <>
            <Link
              to={RouterName.PRODUCTS}
              className="text-gray-600 dark:text-gray-200 hover:underline font-medium sm:text-base text-sm"
            >
              {title}
            </Link>{" "}
            <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>
            <Link
              to="#"
              className="text-background  font-medium sm:text-base text-sm"
            >
              {`${product}`}
            </Link>
          </>
        ) : (
          <Link
            className="text-background  font-medium sm:text-base text-sm"
            to={`/${title}`}
          >{`${title}`}</Link>
        )}
      </div>
    </>
  );
};

export default PageHero;

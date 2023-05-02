import React from "react";
import { Link } from "react-router-dom";
import { headerLink } from "../../utils/listLink";

const HeaderLink = () => {
  return (
    <ul className="header_link flex ">
      {headerLink.map((item, idx) => (
        <li key={idx} className="">
          <Link to={item.url} className="text-lg text-white hover:text-color mx-4 capitalize transition-colors" onClick={() => window.scrollTo(0, 0)}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLink;

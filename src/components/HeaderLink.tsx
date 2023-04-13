import React from "react";
import { Link } from "react-router-dom";
import { headerLink } from "../utils/headerLink";

const HeaderLink = () => {
  return (
    <ul className="header_link">
      {headerLink.map((item, idx) => (
        <li key={idx}>
          <Link to={item.url} onClick={() => window.scrollTo(0, 0)}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLink;

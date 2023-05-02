import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-background p-5">
      <div className="container mx-auto">
        <div className="footerTitle">
          <ul className="mb-8 flex justify-center">
            <li className="mx-2.5">
              <Link
                className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
                style={{ width: 44, height: 44, transition: "0.3s linear" }}
                to="/"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li className="mx-2.5">
              <Link
                className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
                style={{ width: 44, height: 44, transition: "0.3s linear" }}
                to="/"
              >
                <AiFillInstagram />
              </Link>
            </li>
            <li className="mx-2.5">
              <Link
                className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
                style={{ width: 44, height: 44, transition: "0.3s linear" }}
                to="/"
              >
                <AiOutlineTwitter />
              </Link>
            </li>
            <li className="mx-2.5">
              <Link
                className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
                style={{ width: 44, height: 44, transition: "0.3s linear" }}
                to="/"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="mx-2.5">
              <Link
                className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
                style={{ width: 44, height: 44, transition: "0.3s linear" }}
                to="/"
              >
                <BsYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerList flex justify-between">
          <ul>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                shop
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                My account
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Wine Investment
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Wine Storage
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Meet the Team
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Careers at Cru Wine
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Information
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                Cellar Valuation
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                news
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                recruit
              </Link>
            </li>
            <li>
              <Link
                className="p-1.5 text-white inline-block hover:text-color transition-colors"
                to="/"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <p className="my-8 text-white  m-0">
          Responsible commitment, agree to the terms of this website. This
          content is intended for those of legal drinking age, please do not
          share or forward it to anyone under age.
        </p>
        <div>
          <div className="Prohibited">
            <h5 className="text-center text-orange-300 text-lg capitalize">
              Enjoy responsibly
            </h5>
            <p className=" text-center text-orange-300 capitalize m-0">
              Alcoholic products are not for people under 18 years old and
              pregnant women
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

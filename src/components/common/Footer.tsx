import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-gray-700 bg-background body-font">
        <div className="container flex flex-col flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-full flex justify-center flex-col items-center lg:w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-color title-font lg:justify-start">
              <img src={logo} className="lg:w-56 w-52" />
            </a>
            <div className="mt-4 lg:mb-0 mb-6">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-gray-500 cursor-pointer mx-6 hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="lg:lg:ml-3 text-gray-500 cursor-pointer mx-6 hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="lg:ml-3 text-gray-500 cursor-pointer mx-6 hover:text-gray-700">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="lg:ml-3 text-gray-500 cursor-pointer mx-6 hover:text-gray-700">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow md:mt-10  text-center md:pl-20 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-color uppercase title-font">
                About
              </h2>
              <nav className="md:mb-10 mb-4 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-color uppercase title-font">
                Support
              </h2>
              <nav className="md:mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-color uppercase title-font">
                Platform
              </h2>
              <nav className="md:mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-color uppercase title-font">
                Contact
              </h2>
              <nav className="md:mb-10 mb-4 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Send a Message
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    Request a Quote
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    +123-456-7890
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <p className="my-8 text-gray-500  m-0">
            Responsible commitment, agree to the terms of this website. This
            content is intended for those of legal drinking age, please do not
            share or forward it to anyone under age.
          </p>
          <div className="w-full">
            <h5 className="text-center text-orange-300 text-lg capitalize">
              Enjoy responsibly
            </h5>
            <p className=" text-center text-orange-300 capitalize m-0">
              Alcoholic products are not for people under 18 years old and
              pregnant women
            </p>
          </div>
        </div>
      </footer>
    </>
    // <footer className="flex flex-col bg-background p-5">
    //   <div className="container mx-auto">
    //     <div className="footerTitle">
    //       <ul className="mb-8 flex justify-center">
    //         <li className="mx-2.5">
    //           <Link
    //             className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
    //             style={{ width: 44, height: 44, transition: "0.3s linear" }}
    //             to="/"
    //           >
    //             <FaFacebookF />
    //           </Link>
    //         </li>
    //         <li className="mx-2.5">
    //           <Link
    //             className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
    //             style={{ width: 44, height: 44, transition: "0.3s linear" }}
    //             to="/"
    //           >
    //             <AiFillInstagram />
    //           </Link>
    //         </li>
    //         <li className="mx-2.5">
    //           <Link
    //             className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
    //             style={{ width: 44, height: 44, transition: "0.3s linear" }}
    //             to="/"
    //           >
    //             <AiOutlineTwitter />
    //           </Link>
    //         </li>
    //         <li className="mx-2.5">
    //           <Link
    //             className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
    //             style={{ width: 44, height: 44, transition: "0.3s linear" }}
    //             to="/"
    //           >
    //             <FaLinkedinIn />
    //           </Link>
    //         </li>
    //         <li className="mx-2.5">
    //           <Link
    //             className="flex justify-center items-center rounded-full bg-slate-100 text-background text-2xl hover:bg-color"
    //             style={{ width: 44, height: 44, transition: "0.3s linear" }}
    //             to="/"
    //           >
    //             <BsYoutube />
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footerList flex justify-between">
    //       <ul>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             shop
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             My account
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Wine Investment
    //           </Link>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Wine Storage
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Meet the Team
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Careers at Cru Wine
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Information
    //           </Link>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             Cellar Valuation
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             news
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             recruit
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="p-1.5 text-white inline-block hover:text-color transition-colors"
    //             to="/"
    //           >
    //             contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <p className="my-8 text-white  m-0">
    //       Responsible commitment, agree to the terms of this website. This
    //       content is intended for those of legal drinking age, please do not
    //       share or forward it to anyone under age.
    //     </p>
    //     <div>
    //       <div className="Prohibited">
    //         <h5 className="text-center text-orange-300 text-lg capitalize">
    //           Enjoy responsibly
    //         </h5>
    //         <p className=" text-center text-orange-300 capitalize m-0">
    //           Alcoholic products are not for people under 18 years old and
    //           pregnant women
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;

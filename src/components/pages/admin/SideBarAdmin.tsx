import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../assets/home/logo.png";
import { RouterName } from "../../../routers/RouterName";
import { linkAdminPage } from "../../../utils/listLink";

export const SideBarAdmin = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <>
      <div className="min-h-screen w-60 ">
        <div className="py-4 px-8 w-full h-full flex flex-col ">
          <div className="flex space-2 items-center border-b-2 pb-4">
          <Link to="/" className="logo h-full">
          <img className="h-full" src={logo} alt="logo" />
        </Link>
          </div>
          {
            linkAdminPage.map((item, idx) => {
              const colorText = activeLink === idx ? "text-white" : "text-background";
              return <Link to={item.url} key={item.url} onClick={() => setActiveLink(idx)} className={` rounded-md cursor-pointer flex items-center space-x-4 mt-6 p-2 ${activeLink === idx ?  "bg-background" : "text-background"}`}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 ${colorText}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                  />
                </svg>
              </div>
              <div>
                <p className={`text-lg ${colorText} font-semibold`}>{item.text}</p>
              </div>
            </Link>
              
            })
          }


          <div className="flex mt-auto space-x-4 items-center order-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <a
              href="#"
              className="block font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

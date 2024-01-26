import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/common";
import { useDarkMode } from "./DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <footer className="bg-gray-200 shadow dark:bg-gray-900  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={LOGO_URL} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Zoomato
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <Link to="/">
                <li className="px-4 font-bold text-black dark:text-white">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="px-4 font-bold text-black dark:text-white">
                  About Us
                </li>
              </Link>
              <Link to="/contact">
                <li className="px-4 font-bold text-black dark:text-white">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Zoomato
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

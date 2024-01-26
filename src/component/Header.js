import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import { useDarkMode } from "./DarkModeContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const cartItems = useSelector((appStore) => appStore.cart.items);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-250 p-4 flex justify-between bg-red-500 dark:bg-gray-900">
        <div className="">
          <img className="nav-img  w-12" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex ">
            <Link to="/">
              <li className="px-4 font-bold dark:text-white">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-4 font-bold dark:text-white">About Us</li>
            </Link>
            <Link to="/contact">
              <li className="px-4 font-bold dark:text-white">Contact</li>
            </Link>
            <Link to="/cart">
              <li className="px-4 font-bold dark:text-white">
                Cart ({cartItems.length} items)
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

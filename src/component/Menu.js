import { useParams } from "react-router-dom";
import useMenuList from "../utils/useMenuList";
import { useDarkMode } from "./DarkModeContext";
import ItemList from "./itemList";
import { useEffect, useState } from "react";

const Menu = () => {
  const [itemsList, setItemsList] = useState(null);
  const { resId } = useParams();
  const menuList = useMenuList(resId);
  const { darkMode, toggleDarkMode } = useDarkMode();

  // const cart = useSelector((appStore)=> appStore.cart.items)

  const { cuisines = " ", name = " " } =
    menuList?.cards[0]?.card?.card?.info || {};
  const itemCards =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  const itemList = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const itemCategory = itemList?.cards?.filter(
    (res) =>
      res?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleList = (index) => {
    setItemsList(index === itemsList ? null : index);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="max-w-5xl  p-4 m-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto  ">
        <div className=" mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {name}
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-gray-300 hover:underline dark:text-gray-400"
          >
            {cuisines}
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className=" divide-gray-200 dark:divide-gray-700">
            <div>
              {Array.isArray(itemCategory) &&
                itemCategory.map((res, index) => (
                  <div key={res.card.card.title}>
                    <div
                      className="p-4 m-4  border-b-2 border-b-gray-300 shadow-md cursor-pointer"
                      onClick={() => handleList(index)}
                    >
                      <div className="flex justify-between">
                        <li className="ml-4 font-bold dark:text-white dark:border-white ">
                          {res.card.card.title}
                        </li>
                        <li>⬇️</li>
                      </div>
                    </div>
                    {itemsList === index && <ItemList data={itemCards} />}
                  </div>
                ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

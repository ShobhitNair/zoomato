import { useDispatch } from "react-redux";
import { ITEM_URL } from "../utils/common";
import { useDarkMode } from "./DarkModeContext";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  console.log({ data });
  if (!data || !Array.isArray(data.itemCards)) {
    return <div>No items available</div>;
  }
  const handleAddItem = (res) => {
    dispatch(addItem(res));
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      {Array.isArray(data.itemCards) &&
        data?.itemCards?.map((res) => (
          <li key={res.card.info?.id} className="py-3 sm:py-4 ">
            <div data-testid='item-card' className="flex items-center dark:border-b-gray-100 ">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0 ms-4 d">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {res.card.info?.name}
                </p>
                <div className="">
                  <li className="text-black dark:text-white ">
                    {res.card.info?.price / 100} Rs
                  </li>
                </div>
                <p className="text-sm text-gray-500 truncate  dark:text-white ">
                  ⭐{res.card.info?.ratings?.aggregatedRating?.rating}
                </p>
              </div>

              <div className="">
                <button
                  onClick={() => handleAddItem(res)}
                  className="absolute ml-30 bg-black text-white mt-14 ml-5"
                >
                  {" "}
                  Add +
                </button>
                <img
                  className="w-20 aspect-square"
                  src={ITEM_URL + res.card.info?.imageId}
                ></img>
              </div>
            </div>
          </li>
        ))}
    </div>
  );
};

export default ItemList;

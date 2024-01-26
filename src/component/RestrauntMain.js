import { IMG_URL } from "../utils/common";
import { Link } from "react-router-dom";
import { useRestrauntList } from "../utils/useRestrauntList";
import { useDarkMode } from "./DarkModeContext";
import Shimmer from "./Shimmer";

const RestrauntMain = () => {
  const { searchList, handleFilter, handleSearch, searchText, setSearchText } =
    useRestrauntList();
    console.log(searchList);
  const { darkMode, toggleDarkMode } = useDarkMode();
  if (searchList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-gray-300 dark:bg-gray-700">
        <div className="ml-8 ">
          <div className="">
            <input
              className="search m-4 px-4 py-1 border-2 border-black bg-red-300 rounded-md dark:bg-gray-300"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button
              className="m-4 px-4 py-2 bg-red-300 hover:bg-red-400 rounded-md font-bold dark:text-white dark:bg-gray-900"
              onClick={() => handleSearch(searchText)}
            >
              Search
            </button>
            <button
              data-testid='top-rated'
              className="m-4 px-4 py-2 bg-red-300 hover:bg-red-400 rounded-md font-bold dark:text-white dark:bg-gray-900"
              onClick={handleFilter}
            >
              TOP RATED
            </button>
            <button
              className="bg-black dark:bg-white ml-auto px-4 py-2  rounded-full text-white dark:text-black font-bold"
              onClick={toggleDarkMode}
            >
              {darkMode ? "LHT" : "DRK"}
            </button>
          </div>
          <div className="flex flex-wrap ">
            {searchList?.map((restraunt) => (
              <div
                className="w-200 p-3 m-4 bg-red-300 hover:bg-red-400 dark:bg-gray-900 rounded-lg"
                key={restraunt.info.id}
              >
                <Link to={"/restraunt/" + restraunt.info.id}>
                  <img
                    className="w-56 p-2 aspect-square rounded-xl"
                    src={IMG_URL + restraunt.info.cloudinaryImageId}
                  ></img>
                </Link>
                <h1 className="text-xs font-bold ml-2 dark:text-white">
                  {restraunt.info.name}
                </h1>
                <h1 className="text-xs font-medium ml-2 dark:text-white">
                  {restraunt.info.avgRating} rating
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntMain;

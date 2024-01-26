import { useDispatch, useSelector } from "react-redux";
import { ITEM_URL } from "../utils/common";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((appStore) => appStore.cart.items);
  console.log(cartItems);
  dispatch = useDispatch();
  handleRemoveItem = (cartItems) => {
    dispatch(removeItem(cartItems));
  };
  if (cartItems.length === 0) {
    console.log(cartItems);
    return (
      <div className="flex justify-center">
        <img
          className="w-72 m-20"
          src="https://res.cloudinary.com/dec6dprpb/image/upload/v1705911578/Animation_-_1705911295811_evcapc.gif"
        ></img>
      </div>
    );
  }

  return (
    <div>
      <div className="m-10">
        <h1 className="text-center font-bold">Cart</h1>
        <div className="flex justify-center ">
          <button
            onClick={() => handleRemoveItem(cartItems)}
            className="bg-black text-white font-bold p-1 rounded-md"
          >
            Clear Cart
          </button>
        </div>

        {Array.isArray(cartItems) &&
          cartItems.map((res) => (
            <div
              key={res.card.info.id}
              className="flex items-center mx-52 my-2 border-b-2 border-b-gray-300 shadow-md"
            >
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {res.card.info.name}
                </p>
                <div className="">
                  <ul>
                    <li className="text-black">
                      {res.card.info.price / 100} Rs
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  ⭐{res.card.info.ratings.aggregatedRating.rating}
                </p>
              </div>

              <div>
                <img
                  className="w-16 aspect-square"
                  src={ITEM_URL + res.card.info.imageId}
                ></img>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;

import { useCallback } from "react";
import { useCart } from "../context/cart-context";
import { Dessert } from "../types";

function DessertItem({ dessert }: { dessert: Dessert }) {
  const { state, dispatch } = useCart();
  const cartItem = state.items.find((item) => item.name === dessert.name);

  const addToCart = useCallback(
    (dessert: Dessert) => {
      dispatch({ type: "ADD_ITEM", payload: dessert });
    },
    [dispatch]
  );

  const handleIncrement = useCallback(() => {
    if (cartItem) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { name: cartItem.name, quantity: cartItem.quantity + 1 },
      });
    }
  }, [cartItem, dispatch]);

  const handleDecrement = useCallback(() => {
    if (cartItem) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { name: cartItem.name, quantity: cartItem.quantity - 1 },
      });
    }
  }, [cartItem, dispatch]);

  return (
    <div className="flex flex-col gap-4 | md:w-[250px]">
      <div className="flex flex-col items-center">
        <div
          className={`-mb-6 overflow-hidden  rounded-xl ${cartItem ? "border-2 border-red" : ""}`}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
            <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
            <img
              src={dessert.image.mobile}
              alt={dessert.name}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        {cartItem ? (
          <div className="bg-red text-rose-100 rounded-full flex justify-between items-center px-3 w-40 h-11">
            <button
              onClick={handleDecrement}
              className="border px-0.5 py-1.5 rounded-full hover:bg-rose-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2">
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>

            <p className="text-rose-100">{cartItem.quantity}</p>

            <button
              onClick={handleIncrement}
              className="border p-0.5 rounded-full hover:bg-rose-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10">
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(dessert)}
            className="flex items-center gap-2 border font-semibold text-body-sm px-6 w-40 h-11 rounded-full border-rose-400 bg-white text-rose-900 hover:border-red hover:text-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20">
              <g fill="#C73B0F" clip-path="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            Add to Cart
          </button>
        )}
      </div>
      <div>
        <p className="text-rose-400 text-body-sm">{dessert.category}</p>
        <h3 className="text-rose-900 font-semibold">{dessert.name}</h3>
        <p className="text-red font-semibold">${dessert.price}</p>
      </div>
    </div>
  );
}

export default function DessertList({ desserts }: { desserts: Dessert[] }) {
  return (
    <div className="flex flex-col gap-4 | md:flex-row  flex-wrap">
      {desserts.map((dessert) => (
        <DessertItem key={dessert.name} dessert={dessert} />
      ))}
    </div>
  );
}

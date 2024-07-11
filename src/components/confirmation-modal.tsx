import { memo } from "react";
import { useCart } from "../context/cart-context";

export default memo(function ConfirmationModal() {
  const { dispatch } = useCart();

  return (
    <div>
      <img src={"./assets/images/icon-order-confirmed.svg"} alt="" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div></div>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Start New Order</button>
    </div>
  );
});

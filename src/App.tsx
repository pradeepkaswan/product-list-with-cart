import DessertList from "./components/dessert-list";
import Cart from "./components/cart";
import { CartProvider } from "./context/cart-context";
import useDesserts from "./hooks/use-desserts";

export default function App() {
  const desserts = useDesserts();

  return (
    <CartProvider>
      <div className="flex flex-col | md:flex-row">
        <div className="mb-6">
          <h1 className="text-heading-lg font-bold mb-6">Desserts</h1>
          <DessertList desserts={desserts} />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

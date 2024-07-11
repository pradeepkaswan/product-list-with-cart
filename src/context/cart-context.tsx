import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";
import { CartItem, Dessert } from "../types";

type CartState = {
  items: CartItem[];
  total: number;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Dessert }
  | { type: "UPDATE_QUANTITY"; payload: { name: string; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.name === action.payload.name);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.name === action.payload.name ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.name === action.payload.name
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload),
      };
    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

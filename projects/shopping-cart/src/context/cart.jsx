/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const { state, addCart, removeFromCart, clearCart} = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

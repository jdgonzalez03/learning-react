import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined){
    throw new Error('useCart se esta usando sin un carProvider')
  }

  return context
}
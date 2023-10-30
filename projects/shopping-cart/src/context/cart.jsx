/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addCart = (product) => {
    //Verificar si el producto ya esta en el carrito
    const productInCarIndex = cart.findIndex(item => item.id === product.id)

    if (productInCarIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCarIndex].quantity += 1
      return setCart(newCart)
    }

    //Producto no esta en carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([]);
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

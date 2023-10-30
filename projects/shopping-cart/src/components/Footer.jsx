/* eslint-disable react/prop-types */
// import { useCart } from "../hooks/useCart"
// import { useFilter } from "../hooks/useFilter"
import "./Footer.css"

export function Footer (){
  // const {filters} = useFilter()
  // const {cart} = useCart()
  return (
    <footer className='footer'>
      
        <h4>Prueba técnica de React ⚛️ － <span>@animalplay</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5> 

      {
        // JSON.stringify(filters, null, 2)
      }
      {
        // JSON.stringify(cart, null, 2)
      }

    </footer>
  )
}
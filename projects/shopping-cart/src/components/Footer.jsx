/* eslint-disable react/prop-types */
import "./Footer.css"

export function Footer ( {filters }){
  return (
    <footer className='footer'>
      {/* {
        <h4>Prueba técnica de React ⚛️ － <span>@animalplay</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5> */
      }
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
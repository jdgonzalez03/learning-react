import { useState } from "react"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilter } from "./hooks/useFilter"
import {products as initialProducts} from "./mocks/products.json"

function App() {  
  const [products] = useState(initialProducts)
  const {filters, filterProducts, setFilters} = useFilter();

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer  filters={ filters }/>
    </>
  )
}

export default App

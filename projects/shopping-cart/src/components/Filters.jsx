/* eslint-disable react/prop-types */
import { useId } from 'react'
import './Filters.css' 
import { useFilter } from '../hooks/useFilter';

export function Filters (){
  const {filters, setFilters} = useFilter();

  // const [minPrice, setMinPrice] = useState(0); //estado local
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  // console.log({minPriceFilterId, categoryFilterId})

  const handleChangeMinPrice = (event) => {
    // setMinPrice(event.target.value); //MALA PRACTICA
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          id={minPriceFilterId}
          type="range" 
          name="price"  
          min='0'
          max='1200'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select  id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Telefonos</option>
        </select>
      </div>
    </section>
  )
}
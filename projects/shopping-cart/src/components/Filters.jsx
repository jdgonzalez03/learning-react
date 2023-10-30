/* eslint-disable react/prop-types */
import { useState, useId } from 'react'
import './Filters.css' 

export function Filters ({onChange}){
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  console.log({minPriceFilterId, categoryFilterId})

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);

    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    onChange(prevState => ({
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
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select  id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Telefonos</option>
        </select>
      </div>
    </section>
  )
}
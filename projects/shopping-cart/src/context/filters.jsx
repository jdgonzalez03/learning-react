/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//Crear contexto y el que se debe consumir
export const FiltersContext = createContext();

//Proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

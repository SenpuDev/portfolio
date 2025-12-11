import { useContext } from 'react'
import { FiltersContext } from '../../context/Filters'

const useFilters = () => {
  return useContext(FiltersContext)
}

export default useFilters

import { useContext } from 'react'
import { FiltersContext } from '../../context/filters'

const useFilters = () => {
  return useContext(FiltersContext)
}

export default useFilters

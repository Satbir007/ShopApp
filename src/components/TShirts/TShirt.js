import { useState } from "react";
import TShirtSummary from './TShirtSummary';
import AvailableTShirt from './AvailableTShirt';
import FilterBar from '../Layout/FilterBar'
import FilterContext from "../../store/filter-context";

const Meals = () => {
  const [val,setVal]=useState('');
  return (
    <FilterContext.Provider value={[val, setVal]}>
      {console.log(val)}
      <TShirtSummary />
      <FilterBar />
      <AvailableTShirt />
      </FilterContext.Provider>
  );
};

export default Meals;
import FilterContext from "../../store/filter-context";
import React, { useContext } from "react";
import classes from './FilterBar.module.css';


function FilterBar(){
    const [val,setVal]= useContext(FilterContext);
    const data=[
        'S', 'XS','X', 'L', 'XL', 'XXL','M', 'ML'
    ]
    return(
        <div className={classes.main}>
            <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Search by Size" />
            <datalist id="data">
                {data.map((op,index)=> <option key={index}>{op}</option>)}
            </datalist>

            {/* <h1>{val}</h1> */}
        </div>
    );
}
export default FilterBar;
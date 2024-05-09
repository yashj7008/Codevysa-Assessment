import React from 'react'
import { RxCross1 } from "react-icons/rx";

const FilterBar = ({ filterDiv , setFilterDiv}) => {
    const handleClick=()=>{
        setFilterDiv(false);
        console.log("Filter" ,filterDiv)
    }
  return (
    <div className='filter-bar' style={{ position:"relative",backgroundColor :"white",height:"100%", width:"100%" , cursor:"pointer"}}>
        <h2>Filters</h2>
        <div style={{position :"absolute", right:"3rem", top:"1rem"}} onClick={handleClick}>
           <RxCross1 size={24} />
      </div>
        <form>
            <div>
                <label htmlFor='productName'>Product Name</label>
                <input  id='productName' type='text' placeholder='Test Product Name'/>
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <select id="categery">
                <option>Temp1</option>
                <option>Temp2</option>
                </select>
            </div>
            <div>
               <label htmlFor='eventName'>Event Name</label>
                <input  id='eventName' type='text' placeholder='Test Product Name'/>
    
            </div>
            <div>
              <label htmlFor='matchName'>Match Name</label>
                <input  id='matchName' type='text' placeholder='Match Name'/>
            </div>
            <div>
                <label htmlFor='team'>Team</label>
                <select id="team">
                <option>Temp1</option>
                <option>Temp2</option>
                </select>
            </div>
            <div className='buttons'> 
             <button>Apply</button>
             <button style={{backgroundColor :"white"}}>Reset</button>
            </div>
          
        </form>
    </div>
  ) 
}

export default FilterBar
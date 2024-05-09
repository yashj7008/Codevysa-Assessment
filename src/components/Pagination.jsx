import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

function Pagination() { 
  const [pageNumber , setPageNumber]  = useState(1);

  const pageNumbers = [1,2,3,4,5,6];

  const handleClick =(num)=>{
    setPageNumber(num);
  }

  return (
    <div className="pagination">
     <MdOutlineKeyboardArrowLeft/>
      <MdOutlineKeyboardDoubleArrowLeft/>
        {pageNumbers.map((number) => (
            <button  className="page-number"  style={{ backgroundColor : pageNumber === number ? "gray" : "white" }} onClick={()=>handleClick(number)}>
              {number}
            </button>
        ))}
      <MdOutlineKeyboardDoubleArrowRight/>
      <MdOutlineKeyboardArrowRight/>
    </div>
  );
}

export default Pagination;

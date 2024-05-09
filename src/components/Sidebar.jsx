import React from 'react'
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneSchedule } from "react-icons/ai";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='sidebar'>
     
      <div className='icons' > 
      <AiOutlineLineChart size={24}/>
       <AiOutlineHome size={24}/>
       <AiTwotoneSchedule size={24}/>

      </div>
      
      <div>
      <MdOutlineKeyboardDoubleArrowRight/>
      </div>
       

    </div>
  )
}

export default Sidebar
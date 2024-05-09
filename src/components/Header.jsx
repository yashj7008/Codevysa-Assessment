import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
     <header>
            <div className='main-heading'><h1>Products</h1></div>
            <div className='profile'>
                <div><MdNotificationsNone size={28} /></div>
                <div className='profile-sub'> < CgProfile  size={28} /> <span style={{fontSize : "1.2rem"}}>Matthews Gill</span><FaChevronDown size={28}/></div>
            </div>
        </header>
    </>
  )
}

export default Header
import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const Webpage = () => {
  return (
    <div className='layout'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Webpage
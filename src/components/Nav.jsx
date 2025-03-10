import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='my-10 flex items-center justify-center '>
          
          <p className='font-serif text-2xl mt-5 mt:0'>GLASSNEPAL</p>
                </div>
    
                {/* tabs */}
                <div className='flex justify-center px-2  text-[12px]  font-bold'>
                    <NavLink to='/' className="border-r-2 px-8">Home</NavLink>
                    <NavLink to='/collection' className="border-r-2 px-8">Collection</NavLink>
                    <NavLink to='/' className="border-r-2 px-8">Gallery</NavLink>
                    <NavLink to='/' className="px-8">Contact</NavLink>
                   
                </div>
    </div>
  )
}

export default Nav

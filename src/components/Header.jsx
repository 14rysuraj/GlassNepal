import React from 'react'
import { logo, mainlogo } from '../utils/images'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../Redux/features/cart';
import { useNavigate } from 'react-router-dom';

const Header = () => {
        const cart = useSelector((state) => state.cart);
        const items = cart.items
        const dispatch = useDispatch();
        const navigate = useNavigate();
        
     


        const toggle = () => {
                dispatch(toggleCart())
}

return (
        <div className=' py-3 flex items-center justify-between w-full relative'>
        <img src={mainlogo} height={70} width={70} onClick={(()=>navigate('/'))} className='cursor-pointer'/>
       
             
                <div className='flex items-center gap-10  '>
                      
            <div className='flex items-center justify-between border-1 px-2 py-2 gap-5 absolute top-20 w-full left-0 md:relative md:top-0  '>

            <input 
                                type='text' 
                                placeholder='Search...' 
                                className='  text-sm h-full  '
                />
                <button><CiSearch /></button>
                
            </div>
                        <div className=''>
                                <button className='text-2xl' onClick={()=>navigate('/auth')}><FaRegUserCircle /></button>
                        </div>
                        <div className=' relative'>
                                <button className='text-2xl' onClick={toggle}><IoCartOutline /></button>

                                {items.length > 0 ? <div className='absolute right-[-20px] top-0 bg-red-500 rounded-[50%] h-6 w-6 text-center' >{items.length }</div>:''}

                                        
                        </div>
                </div>
        
    </div>
)
}

export default Header

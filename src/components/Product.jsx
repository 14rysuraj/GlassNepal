import React from 'react'
import { image } from '../utils/images'
import { useNavigate } from 'react-router-dom'
import { logo } from '../utils/images'
import { IoCartOutline } from "react-icons/io5";


const Product = ({ images,price,id }) => {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/details/${id}`)

    
  }

  return (
      <div className='flex flex-col justify-between  gap-10 cursor-pointer items-center  hover:p-2 rounded-2xl hover:shadow-2xl ' onClick={()=>handleShowDetails(id)}>
          <img src={images} alt="" height={500} width={500}  className='h-1/2 object-cover' />

          <div className='font-serif'>
        <p>Product Name</p><p>Nrs : {price}</p>



       
      </div>
      
{/* 

      <div className='flex text-nowrap items-center w-full text-white bg-black px-5 rounded-2xl'>
        <button className='text-2xl w-[100%] my-2'><IoCartOutline /></button>
<p>Add To Cart</p>
        </div> */}
           
          
      
    </div>
  )
}

export default Product

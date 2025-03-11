import React, { useEffect, useRef, useState } from 'react'
import { image } from '../utils/images'
import { useNavigate } from 'react-router-dom'
import { logo } from '../utils/images'
import { IoCartOutline } from "react-icons/io5";
import gsap from 'gsap';
import { add_to_cart, openCart } from '../Redux/features/cart';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from 'react-redux';



const Product = ({ images,price,id,data}) => {
  const navigate = useNavigate();
  const addToCartContainer = useRef(null);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const dispatch = useDispatch();

  const handleShowDetails = () => {
    navigate(`/details/${id}`)

    
  }

  console.log(showAddToCart)

  useEffect(() => {

    if (showAddToCart) {
      gsap.to(addToCartContainer.current, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease:"power2.out"
      })
    }
    else {
      gsap.to(addToCartContainer.current, {
        opacity: 0,
        y: 40,
        duration: 0.3,
        ease: "power2.in",
      })
    }



    
  }, [showAddToCart])
  



  const itemdata = {
    "id": data.id,
    "name": data.name,
    "mainImage": data.mainImage,
    "size": data.sizes[0],
    "color": "black",
    "price": data.price,
    "quantity":1
}

 


  const addtocart = (item) => {
    dispatch(add_to_cart(item))
    dispatch(openCart())
    
  }



  return (
    <div className='flex flex-col justify-between py-3 gap-4 items-center bg-gray-100 rounded-2xl  '
      
      onMouseEnter={() => setShowAddToCart(true)}
      onMouseLeave={() => setShowAddToCart(false)}>
          <img src={data.mainImage} alt="" height={500} width={500}  className='h-1/2 object-contain cursor-pointer' onClick={() => handleShowDetails(id)} />

      

          <div ref={addToCartContainer} className='w-full flex font-serif  '>
          <button onClick={()=>{addtocart(itemdata)}} className='bg-black text-white px-4 py-2  flex items-center gap-2 w-full justify-center'>
          <p>Add To Cart</p>
          {/* <div><AiOutlineShoppingCart  /></div> */}
          
        </button>
        

        </div>


          <div className='flex flex-col gap-2'>
        <p className='font-light font-serif '>{data.name}</p>
        <p className='font-bold text-sm font-sans '>Nrs : {data.price}</p>

      



       
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

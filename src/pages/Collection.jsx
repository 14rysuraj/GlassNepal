import React, { useEffect, useRef, useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import Product from '../components/Product'
import { categories, sunglasses } from '../utils/api'
import { useNavigate, useParams } from 'react-router-dom';

const Collection = () => {


  
  
  const [showFilter, setFilter] = useState(false);
  const [sortBy, setSortBy] = useState(false);
  const container = useRef(null);
  const [glasses, setGlasses] = useState(sunglasses);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const { category } = useParams();


  useEffect(() => {
    if (category) {
      setGlasses(sunglasses.filter(item => item.category === category));
    } else {
      setGlasses(sunglasses);
    }
  }, [category]);




  const filterByCategory = (value) => {

    navigate(`/collection/${value}`)
    setFilter(prev=>!prev)

  };


  const sortInAscending = () => {
    glasses.sort((a,b)=>a.price - b.price)
  }

  const sortInDescending = () => {
    glasses.sort((a,b)=>b.price - a.price)
    
  }

  const handleFilter = () => {
    setFilter(prev => !prev);
  };
  const handleSortBy = () => {
    setSortBy(prev=>!prev)
  }

  useEffect(() => {
    if (showFilter) {
      gsap.to(container.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(container.current, {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [showFilter]); 

  return (
    <div className='relative'>
      {/* title  */}
      {/* <div className=' text-center my-20 bg-black text-white py-10 md:py-20 flex flex-col gap-10 rounded-2xl'>
        <p className='text-3xl font-serif'>Discover Your Personality</p>
        <p className='text-xl text-white font-serif'>Maintain Your Aura</p>
      </div> */}


      <div className='text-4xl font-serif font-bold my-20'>
        
        {category ? <p>{ category}'s Sunglasses</p>: <p>Sunglasses</p>}
      
      </div>

      <div className=' h-full relative'>
        {/* filter section  */}
        <div className='flex justify-between my-20 font-serif'>
          <button className='border px-10 py-2 flex items-center gap-6' onClick={handleFilter}>
            <VscSettings />
            <p>All Filter</p>
          </button>
          <button className='flex items-center gap-10 relative' onClick={handleSortBy}>
            <p>Sort by :</p>
            {sortBy ? <FaChevronUp />:<IoIosArrowDown/>}

            {sortBy && <div className=' absolute top-10 px-4 py-2 right-0  bg-white border-[0.2px]'>
              
              <button className='text-nowrap text-sm border-b-1 py-2 text-slate-500 hover:text-black ' onClick={sortInDescending}>Price (High to Low)</button>
              <button className='text-nowrap text-sm border-b-1 py-2 text-slate-500 hover:text-black' onClick={sortInAscending}>Price (Low to High)</button>
            
            
            </div>}


          
          </button>
        </div>

        {/* filtering Panel */}
        <div ref={container} className='fixed top-0 w-full bg-white h-[100%] sm:w-2/5 md:2/5 lg:1/3 left-0 z-20 px-5 py-7 font-serif -translate-x-full shadow-2xl'>
          {/* Header */}
          <div className='flex items-center justify-between border-b-1 text-2xl mb-10'>
            <h1>FILTERS</h1>
            <RxCross2 onClick={handleFilter} className="cursor-pointer" />
          </div>

          {/* Filter Options */}
          <div className='flex flex-col items-baseline gap-5'>

            {categories.map((item, i) => (
              <button key={i}  onClick={(()=>filterByCategory(item))}>{item }</button>
            ))}
           
          
          </div>
        </div>

        {/* Products */}
        <div className='lg:gap-20 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-10'>
          {glasses.map((item) => (
            <Product key={item.id} images={item.mainImage} price={item.price} id={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection;
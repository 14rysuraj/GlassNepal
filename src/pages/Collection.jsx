import React from 'react'
import { Brand } from '../utils/Brand'
import Product from '../components/Product'
import { sunglasses } from '../utils/api'

const Collection = () => {
    console.log(sunglasses)

    console.log(Brand)
  return (
    <div className='relative'>
      {/* title  */}
          <div className=' text-center my-20 bg-black text-white py-10 md:py-20 flex flex-col gap-10 rounded-2xl'>
              <p className='text-3xl font-serif'>Discover Your Personality</p>
              <p className='text-xltext-white font-serif'>Maintain Your Aura</p>
          </div>

          

          <div className=' h-full flex  relative'>
              {/* sidebar */}
                
              <div className='flex gap-20  sticky top-[100px] h-max  '>
                 


                  
              </div>

              {/* products */}
              <div className=' lg:gap-20 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-10  '>
                  
                  {
                      sunglasses.map((index) => (
                          <Product key={index} images={index.mainImage} price={index.price} id={ index.id} />
                        ))
                  }
                 
                  </div>
              


          </div>
    </div>
  )
}

export default Collection

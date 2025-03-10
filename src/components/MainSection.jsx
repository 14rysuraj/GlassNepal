import React, { useRef } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { vid1 } from '../utils/video'
import { Kids, Men, Women } from '../utils/images'

const MainSection = () => {


  
    return (
      
            // title 
<>

      

            {/* video bar */}

        <video src={vid1} autoPlay loop muted className='h-160 w-full bg-blue-300 object-cover my-5'></video>

          {/* image section  */}

        <div className='md:flex'>
          <div className='relative text-white font-extrabold '>
            <img src={Men} alt="" />
            <button className='absolute bottom-[0] text-center w-full md:py-14 md:text-4xl'>MEN</button>
          </div>
          <div className='relative text-white font-extrabold '>
            <img src={Women} alt="" />
            <button className='absolute bottom-[0] text-center w-full md:py-14 md:text-4xl'>WOMEN</button>
          </div>
          <div className='relative text-white font-extrabold '>
            <img src={Kids} alt="" />
            <button className='absolute bottom-[0] text-center w-full md:py-14 md:text-4xl'>KIDS</button>
          </div>
      
          </div>

            </>
  )
}
export default MainSection

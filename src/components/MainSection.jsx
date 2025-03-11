import React, { useRef, useState } from 'react'
import { Link ,NavLink, useNavigate} from 'react-router-dom'
import { vid1 } from '../utils/video'
import { Kids, Men, Women } from '../utils/images'

const MainSection = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState('');




  const handleCategory = (category) => {
    setCategory(category)
    navigate(`/collection/${category}`);
  }
  
    return (
      
            // title 
<>

      

            {/* video bar */}

        <video src={vid1} autoPlay loop muted className='h-160 w-full  object-cover my-5'></video>

          {/* image section  */}

        <div className='md:flex'>
          <div className='relative text-white font-extrabold cursor-pointer ' onClick={() => handleCategory("Male")}  >
            <img src={Men} alt="" />
            <button className='absolute bottom-[0] text-center w-full md:py-14 md:text-4xl'>MEN</button>
          </div>
          <div className='relative text-white font-extrabold cursor-pointer' onClick={()=>handleCategory("Female") } >
            <img src={Women} alt=""  />
            <button className='absolute bottom-[0] text-center w-full md:py-14 md:text-4xl' >WOMEN</button>
          </div>
          <div className='relative text-white font-extrabold cursor-pointer ' onClick={() => handleCategory("Kids")}>
            <img src={Kids} alt="" />
            <button className='absolute bottom-[0] text-center w-full md:py-14 md:text-4xl'>KIDS</button>
          </div>
      
        </div>
        

        {/* newest Product  */}


        <div className='flex overflow-x-scroll'>

        </div>

            </>
  )
}
export default MainSection

import React, { useState } from 'react'
import { googlelogo, mainlogo } from '../utils/images'
import { createUserWithEmailAndPassword ,validatePassword} from 'firebase/auth'
import { auth } from '../config/firebase'
import toast from 'react-hot-toast'





    const Auth = () => {



    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        




    

        const signUp = async () => {
            try {
               
                await createUserWithEmailAndPassword(auth, email, password);
                toast.success("signup successful")
                
                
            } catch (err) {
                console.error(err)
            }

        
        
        }


       
        


  return (
    <div className='w-full h-full flex items-center justify-center'>
        
          
          <form className='flex flex-col gap-2 border-1 my-30 px-6 py-3 lg:w-1/4 w-full sm:w-2/4 rounded-2xl shadow-sm'>
              
              <div className='flex justify-center'>
                  
              <img src={mainlogo} alt="logo" height={150} width={150}  />

              </div>
              <input type="text" placeholder='Enter Email'  className='border text-slate-500 px-2 text-sm py-1 my-3  rounded-sm' onChange={(e)=>setEmail(e.target.value)} required />
              <input placeholder='Enter Password' className='border text-slate-500 px-2 text-sm py-1 my-3 rounded-sm' type="password" onChange={(e)=>setPassword(e.target.value)} required/>
              <button className='bg-blue-500 border text-white shadow-2xl py-1 px-4 my-3 rounded-sm ' onClick={signUp}>Sign Up</button>
              <button className='flex gap-2 justify-center my-4 hover:underline'>
                  <img src={googlelogo} alt=""  height={20} width={20}/>
                  <p>Sign up with google</p></button>


          </form>
    </div>
  )
}

export default Auth

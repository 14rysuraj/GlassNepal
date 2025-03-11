import React, { useState } from "react";
import { googlelogo, mainlogo } from "../utils/images";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  validatePassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch ,useSelector} from "react-redux";
import { setUserData } from "../Redux/features/authentication";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


    
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();

    const userdata = useSelector((state) => state.authentication)
    
    console.log(userdata.user);
    
    
    
    const signInWithGoogle = async() => {
       await signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      dispatch(setUserData(user))
    toast.success("login successful")
    navigate('/')
    
      
     

      

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    }
    
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("signup successful");
     
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <div className="w-full h-full flex items-center justify-center">
          
       


      <form className="flex flex-col gap-2 border-1 my-30 px-6 py-3 lg:w-1/4 w-full sm:w-2/4 rounded-2xl shadow-sm">
        <div className="flex justify-center">
          <img src={mainlogo} alt="logo" height={150} width={150} />
        </div>
        <input
          type="text"
          placeholder="Enter Email"
          className="border text-slate-500 px-2 text-sm py-1 my-3  rounded-sm"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Enter Password"
          className="border text-slate-500 px-2 text-sm py-1 my-3 rounded-sm"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-blue-500 border text-white shadow-2xl py-1 px-4 my-3 rounded-sm "
          onClick={signUp}
        >
          Sign Up
        </button>
        <button className="flex gap-2 justify-center my-4 hover:underline" onClick={signInWithGoogle}>
          <img src={googlelogo} alt="" height={20} width={20} />
          <p>Sign up with google</p>
        </button>
      </form>
    </div>
  );
};

export default Auth;

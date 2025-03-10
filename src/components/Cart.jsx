import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import { closeCart, toggleCart,delete_from_cart, removeAll, updateItem} from "../Redux/features/cart";


import { logo } from "../utils/images";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const items=cart.items;
    const container = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggle = () => {
        dispatch(toggleCart())
      
  };
 





    useEffect(() => {
        gsap.from(container.current, {
            opacity: 1,
            x: '110%',
         
        })
        
    }, [])
    
    if (cart.open) {
        gsap.to(container.current, {
            opacity: 1,
            x:0
        })
    } else {
        gsap.to(container.current, {
            opacity: 1,
            x:'110%'
        })
    }

    const navigateToDetail = (id) => {
        navigate(`/details/${id}`);
        dispatch(toggleCart());
    }

    console.log(items)

  return (
    <div ref={container} className="fixed top-0 right-0 shadow-2xl h-[100%] md:w-[600px] w-full  py-3 bg-primary z-50 overflow-y-scroll bg-white">
      {/* heading  */}

      <div className=" flex items-center justify-between my-2 px-6">
        <div className="flex items-center gap-4">
          <h2 className=" font-logo">Cart Item </h2>
          <p className="text-xs text-slate-600"></p>
        </div>

        <div>
          <button
            className="text-xs border-gray-400 border-[0.6px] py-2 px-5 hover:bg-gray-200"
            onClick={toggle}
          >
            Close
          </button>
          <button
            className="text-xs border-gray-400 border-[0.6px] py-2 px-5 hover:bg-gray-200"
            onClick={() => {dispatch(removeAll())}}
          >
            Clear Items
          </button>
        </div>
          </div>
          


          {items.length >0 ?
              <div className="absolute h-3/4 overflow-scroll w-full px-6 flex flex-col gap-10 ">
                  
                  
                  {items.map((item, i) => (
                    <div key={i} className="flex font-serif  items-center justify-between ">

                    <img src={item.mainImage} alt="image" height={100} width={100} />
                    <div className="flex flex-col items-center ">
                              <h2 className="underline cursor-pointer text-xs md:text-xl" onClick={()=>navigateToDetail(item.id)}>{item.name }</h2>
                            <div className="flex justify-evenly bg-slate-200  px-2 py-2 w-full ">
                                  <button onClick={() => dispatch(updateItem({ id: item.id, operation: 'subtract', price: item.price / item.quantity }))}>
                                      <RiSubtractFill/>
                               </button>
                                  <p>{ item.quantity}</p>
                                  <button onClick={() => dispatch(updateItem({ id: item.id, operation: 'add', price: item.price / item.quantity }))}><IoMdAdd /></button>
                               
                            </div>
                        </div>
                        
                        <div className=" text-sm">
                              <p>Size : {item.size }</p>
                        <p>Price : {item.price.toFixed(2)} </p>
                            
                        </div>
  
                        <button onClick={()=>dispatch(delete_from_cart(item.id))}>
                        <MdDelete />
                          </button>
  
                    </div>
              ))}
                  

 
                  

                  
                  </div>
              
              : <div className='h-[80%] w-full flex items-center justify-center text-gray-500'>Your cart is empty</div>}
          

          <div className='fixed bottom-0 h-32 w-full px-6'>
              
              <hr className='my-3' />
          
        <p className='text-xs text-gray-600 '>Subtotal Amount: </p>
        
              <div className='flex justify-between my-2 items-center'>
                    
              <p>NRS. {cart.total.toFixed(2)}</p> 
                  <button className='bg-blue-600 text-white text-sm py-4 px-5 hover:bg-blue-500' onClick={()=>navigate('/payment')}>CHECK OUT</button>
                  
              </div>
                </div>

    </div>
  );
};

export default Cart;

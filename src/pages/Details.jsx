import React, { useEffect, useState } from 'react'
import { image, logo } from '../utils/images'
import { FaArrowDown } from "react-icons/fa";
import { sunglasses } from '../utils/api';
import { useParams } from 'react-router-dom';
import { BiZoomIn } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, openCart, toggleCart } from '../Redux/features/cart';

const Details = () => {

    const [showSize, setShowSize] = useState(false);
    const [glassId, setGlassId] = useState();
    const [glassData, setGlassData] = useState({});
    const { id } = useParams();
    const [showImage, setShowImage] = useState();
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [quantity, setQuantity] = useState(1);
    

    const sizetoggle = () => {
        setShowSize(!showSize)
    }

 

    const item = {
        "id": glassData.id,
        "name": glassData.name,
        "mainImage": glassData.mainImage,
        "size": size,
        "color": "black",
        "price": glassData.price,
        "quantity":quantity
    }

    const addtocart = (item) => {
        dispatch(add_to_cart(item))
        dispatch(openCart())
    }


    useEffect(() => {
        const fetchGlassData = async () => {
            const glass = sunglasses.find(item => item.id === parseInt(id));
            if (glass) {
                setGlassData(glass);
                setGlassId(glass.id);
                setShowImage(glass.mainImage);
                setSize(glass.sizes[0]); // Set the initial size here
            }
        };

        fetchGlassData();
    }, [id]);

    return (
        <div className='h-full w-full md:flex my-20 md:gap-20 '>
            {/* photos  */}
            <div className='flex flex-col lg:w-1/2 w-full md:my-0 my-20'>
                {/* main  */}
                <div >
                    <img src={showImage} alt=""  className=' bg-slate-200 shadow-sm rounded-lg w-full'  />
                </div>
                {/* option image */}
                <div className='grid grid-cols-3  gap-5 my-10 justify-between items-center'>
                    {
                        glassData.images && glassData.images.map((img, index) => (
                            <img src={img} alt="image" key={index} className=' bg-slate-200 shadow-sm rounded-lg cursor-pointer' onClick={() => setShowImage(img)} /> 
                        ))
                    }
                </div>
            </div>
            {/* details */}
            <div className='lg:w-1/2 flex-col flex gap-10 w-full'> 
                <div className='font-bold font-serif text-xl'>MEGA CLUBMASTER</div>
                <div className='text-sm font-bold font-serif'>7 COLORS</div>
                {/* colors option  */}
                <div className=' gap-10 grid lg:grid-cols-7 md:grid-cols-4 grid-cols-5'>
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                    <img src={image} alt="" className=' bg-slate-200 shadow-sm rounded-lg' />
                </div>

                {/* size  */}
                <div className='font-bold font-serif'>SIZE</div>
                <div className='bg-slate-200 px-10 py-5 flex justify-between relative'>
                    <p>{size}</p>
                    <button onClick={sizetoggle}>
                        <FaArrowDown />
                    </button>
                    {
                        showSize && (
                            <div className='absolute bg-slate-200 w-full top-10 left-0 px-10 py-4 flex flex-col items-start'> 
                                {glassData.sizes && glassData.sizes.map((item, i) => (
                                    <button key={i} onClick={() => setSize(item)}>{item}</button>
                                ))}
                            </div>
                        )
                    }
                </div>

                {/* price  */}
                <div className='font-bold font-serif'>PRICE</div>
                <p className='font-serif'>Nrs : {glassData.price}</p>

                {/* add to cart  */}
                <div className='w-full flex md:justify-between gap-10'>
                    <button className='bg-blue-500 text-white text-sm px-10 py-3 text-center w-1/2 text-nowrap' onClick={()=>addtocart(item)}>Add To Cart</button>
                    <button className='bg-blue-500 text-white text-sm px-10 py-3 text-center w-1/2 text-nowrap'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Details

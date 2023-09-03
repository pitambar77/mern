import React from 'react'
import { useState,useEffect } from 'react';
import {motion as m } from "framer-motion"
import Confetti from "react-confetti";
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
    const [pieces, setPieces] = useState(200);

    const stopConfetti = () =>{
        setTimeout(() =>{
            setPieces(0);
        },3000);
    }

    useEffect(()=>{
        stopConfetti();
    },[]);

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/');
    }

  return (
    <>
     <m.div
    initial = { {opacity:0}}
    animate ={{opacity:1}}
    exit = {{opacity:0}}
     className=" h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-black to-gray-800">
        <div className=" bg-white  rounded-lg  text-gray-700 p-8 md:p-10 flex flex-col justify-center items-center">
            
            <h1  className=' text-xl md:text-2xl font-semibold pb-4'>Thank You!</h1>
            <p className=' text-sm md:text-lg text-gray-600'> Your details has been successfully</p>
            <p className=' text-sm md:text-lg text-gray-600'>submitted. Thanks!</p>
            <button onClick={handleClick} className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-1 md:px-6 md:py-2 mt-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>OK</button>
            
        </div>
        <Confetti gravity={0.2} numberOfPieces={pieces} className=''/>
    </m.div>
    
    </>
  )
}

export default Thanks
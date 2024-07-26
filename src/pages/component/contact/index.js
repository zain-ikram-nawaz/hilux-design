import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Contact() {
  return (
    <main id='contact'>
        <div className='lg:container lg:mx-auto sm:grid sm:col-span-2 mt-40 lg:grid lg:grid-cols-2 sm:px-3 gap-4'>
            <div className='contact-detail'>
                <p className="text-blue-500 text-2xl lg:text-3xl font-semibold">Contact us</p>
                <h1 className='text-5xl font-semibold mt-2 text-zinc-700 sm:text-3xl md:text-4xl'>Easy to Contact us.</h1>
                <p className="my-8 md:w-3/4 text-zinc-700 font-thin">is there a proble finding your dream home? Need a guide in buying first home? or need a consultation on residential issues ? jus contact us.</p>
<div className='contacts grid md:grid-cols-2 gap-x-6 gap-y-6 mt-20'>
    <div className=' text-center border-2 p-4 rounded-xl shadow-lg shadow-zinc-400/50 '>
    <span > <i className=' border-2 p-4 rounded-3xl'><IoCall className="inline text-4xl text-blue-500"/></i> <p className=" text-2xl font-semibold mt-3">call</p><p className='my-3 italic'>+9298376208</p></span>
  
    <button className='block bg-blue-300 rounded-xl text-white w-full py-1 px-2'>Call Now</button>
    </div>
    <div className='border-2 rounded-xl text-center gap-x-6 gap-y-6 p-4 shadow-lg shadow-zinc-400/50'>
    <span > <i className=' border-2  p-4 rounded-3xl'><IoChatbox className="inline text-4xl text-blue-500"/></i> <p className="text-2xl font-semibold mt-3">Chat</p><p className='my-3 italic'>+928736394</p></span>
  
  
    <button className='block bg-blue-300 rounded-xl text-white w-full py-1 px-2'>Chat Now</button>
    </div>
    <div className='border-2 rounded-xl text-center gap-x-6 gap-y-6  p-4 shadow-lg shadow-zinc-400/50'>
    <span > <i className=' border-2  p-4 rounded-3xl'><FaVideo className="inline text-4xl text-blue-500"/></i> <p className=" text-2xl font-semibold mt-3">Message</p><p className='my-3 italic'>+9287363559</p></span>
  
  
    <button className='block bg-blue-300 rounded-xl text-white w-full py-1 px-2'>Message Now</button>
    </div>
    <div className='border-2 rounded-xl text-center  gap-x-6 gap-y-6  p-4 shadow-lg shadow-zinc-400/50'>
    <span > <i className=' border-2  p-4 rounded-3xl'><FaMessage className="inline text-4xl text-blue-500"/></i> <p className=" text-2xl font-semibold mt-3">Video</p><p className='my-3  italic'>+9255699352</p></span>
  
  
    <button className='block bg-blue-300 rounded-xl text-white w-full py-1 px-2'>Video Now</button>
    </div>
    
    </div>            
            </div>
            <div className='image flex justify-center sm:mt-8'>
            <div className="relative -z-10">
              <div className="sm:h-40 sm:w-40 md:h-60 md:w-60 sm:-top-20  absolute rounded-[50%] left-8 bg-orange-300 blur-xl animate-pulse"></div>
              <div className="bg-orange-400 sm:h-40 sm:w-40 sm:-top-20  md:h-60 md:w-60 absolute rounded-[50%] blur-sm animate-pulse"></div>
            </div>
            <img src="p1.jpg" alt="" className="rounded-t-full border-4"/>
            </div>
        </div>
    </main>
  )
}

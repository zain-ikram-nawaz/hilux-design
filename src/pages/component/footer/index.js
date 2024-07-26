import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
   <main>
    <div className='font-thin md:h-[60vh] lg:h-[30vh] sm:h-[70vh]  sm:-top-32 sm:mt-80 md:-top-0 sm:relative leading-7 text-sm grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:p-10 md:mb-0 sm:px-3  bg-gradient-to-r from-blue-500 to-white to-80% '>
        <div className='w-60 sm:w-full sm:pt-10 lg:p-0 lg:w-28 '>
            <p  className='font-bold text-white text-xl lg:text-2xl'>Holux</p>
            <p>our vision is to make all people the best place to live for them</p>
        </div>
        <div className='sm:pt-10 lg:p-0'> 
            <h1 className='mb-2 font-semibold text-xl'>About</h1>
<p>About Us</p>
<p>Features</p>
<p>News & Blog</p>
        </div>
        <div>
            <h1 className='mb-2 font-semibold text-xl'>Company</h1>
            <p>How We Work?</p>
            <p>Capital</p>
            <p>Security</p>
        </div>
        <div><h1 className='mb-2 font-semibold text-xl'>Support </h1>
        <p>FAQs</p>
        <p>Support center</p>
        <p>Contact Us</p></div>
        <div className='text-xl text-blue-500 sm:mb-96 '>
            <h1 className='mb-2 font-semibold text-xl text-black'>Follow us</h1>
            <i><FaInstagramSquare className='inline mx-2'/></i>
            <i><IoLogoWhatsapp className='inline mx-2'/></i>
            <i><FaXTwitter className='inline mx-2'/></i>
            <i><FaFacebook className='inline mx-2'/></i>

        </div>
    </div>
   </main>
  )
}

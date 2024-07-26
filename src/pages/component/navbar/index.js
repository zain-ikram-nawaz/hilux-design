import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Navbar() {
const links=  ["Home","Residences","Value","Contact"]
return (
    <div >
<main className='bg-white md:shadow-lg md:shadow-zinc-200/-50 md:h-[9vh] sm:h-[11vh] sm:text-2xl md:text-lg flex items-center fixed sm:w-full  md:top-0 sm:top-[90vh] z-10'>
    <div className='md:grid md:grid-cols-2 container mx-auto'>
        <div className='sm:hidden md:block animate-bounce'><span className=' font-bold text-blue-500 '>Hilux</span></div>
      <div className='flex md;gap-10 sm:gap-10 sm:justify-center md:text-zinc-800 '>
       <Link className='visited:text-blue-500' href={"#"}><p><FaHome className=' md:inline-block mb-1 mr-1 text-blue-500 md:hidden hover:text-orange-500 transition ease-in-out delay-150 duration-500'/><span className='sm:hidden md:block hover:text-blue-500 transition ease-in-out delay-150 duration-500'>{links[0]}</span></p></Link>
        <Link href={"#residence"}><p><BsFillBuildingsFill className='md:inline-block mb-1 mr-1 text-blue-500 md:hidden hover:text-orange-500 transition ease-in-out delay-150 duration-500'/><span className='sm:hidden md:block hover:text-blue-500 transition ease-in-out delay-150 duration-500'>{links[1]}</span></p></Link>

        <Link href={"#value"}><p><FaLightbulb className='md:inline-block mb-1 mr-1 text-blue-500 md:hidden hover:text-orange-500 transition ease-in-out delay-150 duration-500'/><span className='sm:hidden md:block hover:text-blue-500 transition ease-in-out delay-150 duration-500'>{links[2]}</span></p></Link>

        <Link href={"#contact"}><p><FaPhoneAlt className='md:inline-block mb-1 mr-1 text-blue-500 md:hidden hover:text-orange-500 transition ease-in-out delay-150 duration-500'/><span className='sm:hidden md:block hover:text-blue-500 transition ease-in-out delay-150 duration-500'>{links[3]}</span></p></Link>

      </div>
       
    </div>
</main>
</div>
  )
}

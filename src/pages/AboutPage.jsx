import { clipPath } from 'framer-motion/client'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className=''>
        <div className='flex flex-col w-full md:p-20 p-5 mb-28 pt-20 '>
            <div className='flex w-full gap-1  '>
                <Link to={'/about'} className='bg-[#F0BD51] buttonAbout md:px-8 px-2 md:py-2 py-1 flex items-center font-Bricolage font-semibold'><p className='md:text-lg text-xs text-center'>Sections</p></Link>
                <Link to={'/about/about-us'} className='bg-[#1E1C1C] buttonAbout md:px-8 px-2 md:py-2 py-1 flex items-center font-Bricolage font-semibold text-white'> <p className='md:text-lg text-xs text-center'>About Us</p></Link>
                <Link to={'/about/visi&misi'} className='bg-[#98A869] buttonAbout md:px-8 px-2 md:py-2 py-1 flex items-center justify-center font-Bricolage font-semibold'><p className='md:text-lg text-xs text-center'>Visi & Misi</p> </Link>
                <Link to={"/about/arahan-strategis"} className='bg-[#334075] buttonAbout md:px-8 px-2 md:py-2 py-1 flex items-center font-Bricolage font-semibold text-white'><p className='md:text-lg text-xs text-center'>Arahan Strategis</p> </Link>
            </div>
        <div className='flex flex-col'>
        <Outlet />
         </div>
        </div>
    </div>
  )
}

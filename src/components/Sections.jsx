import React from 'react'
import { Link } from 'react-router-dom'

export default function Sections() {
  return (
   <div className='bg-[#F0BD51] sm:p-10 p-7 flex flex-col gap-10'>

            <Link to={'/about-us'} className=' p-7 relative'>
                <h2 className='font-Bricolage font-semibold sm:text-8xl text-5xl'>About Us</h2>

                <div className="absolute top-0 left-0 right-0 h-1 mx-5 rounded-2xl bg-black" />
                <div className="absolute bottom-0 left-0 right-0 h-1 mx-5 bg-black rounded-2xl" />
                <div className="absolute top-2 left-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
                <div className="absolute top-2 right-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
            </Link>
            <Link to={'/visi&misi'} className=' p-7 relative'>
                <h2 className='font-Bricolage font-semibold sm:text-8xl text-5xl'>Visi & Misi</h2>

                <div className="absolute top-0 left-0 right-0 h-1 mx-5 rounded-2xl bg-black" />
                <div className="absolute bottom-0 left-0 right-0 h-1 mx-5 bg-black rounded-2xl" />
                <div className="absolute top-2 left-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
                <div className="absolute top-2 right-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
            </Link>
            <Link to={'/arahan-strategis'} className=' p-7 relative'>
                <h2 className='font-Bricolage font-semibold sm:text-8xl text-5xl'>Arahan Strategis</h2>

                <div className="absolute top-0 left-0 right-0 h-1 mx-5 rounded-2xl bg-black" />
                <div className="absolute bottom-0 left-0 right-0 h-1 mx-5 bg-black rounded-2xl" />
                <div className="absolute top-2 left-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
                <div className="absolute top-2 right-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
            </Link>
        </div>
  )
}

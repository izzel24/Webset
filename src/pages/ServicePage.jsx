import React from 'react'
import line from '../assets/linePink.svg'

export default function ServicePage() {
  return (
    <div className='bg-[#98A869] min-h-screen flex flex-col items-center'>
      
      <section className='relative flex items-center justify-center w-full min-h-screen'>
        <h2 className="font-Bricolage md:text-[250px] text-7xl text-white font-extrabold text-stroke-outline text-stroke-shadow z-10 text-center">
          Service
        </h2>
        <img
          src={line}
          alt=""
          className="absolute top-1/2 left-1/2 w-full  -translate-x-1/2 -translate-y-1/2 z-0"
        />
      </section>

      <div className='flex flex-col justify-center items-center gap-10 px-4 md:px-12 pb-20 w-full max-w-6xl'>
        <div className='flex flex-col justify-center items-center gap-20 md:p-12 p-7'>
          <h2 className='md:text-6xl text-4xl text-white text-center font-Britania font-bold text-stroke-5'>
            Integrated System Advo
          </h2>
          <p className='text-white md:text-3xl text-xl text-center font-Bricolage'>
            Informasi narahubung sebagai Call Center pelayanan Advokesma dan Informasi narahubung FIA UB
          </p>
          <button className='font-Bricolage text-xl font-semibold bg-[#FDC2D6] p-2 px-10 rounded-4xl cursor-pointer'>Click Here</button>
        </div>

        <div className='flex flex-col justify-center items-center gap-20 md:p-12 p-7'>
          <h2 className='md:text-6xl text-4xl text-white text-center font-Britania font-bold text-stroke-5 '>
            Ruang Aman
          </h2>
          <p className='text-white md:text-3xl text-xl text-center sfont-Bricolage'>
           Pengaduan dan hotline yang dibuat untuk pengaduan bagi mahasiswa serta civitas akademika FIA UB apabila mendapati/melihat perlakuan kekerasan atau perundungan di lingkungan kampus. 
          </p>
          <button className='font-Bricolage text-xl font-semibold bg-[#FDC2D6] p-2 px-10 rounded-4xl cursor-pointer'>Click Here</button>
        </div>
      </div>
    </div>
  )
}

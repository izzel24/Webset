import React from 'react'
import line from '../assets/linePink.svg'

export default function ServicePage() {
  return (
    <div className='bg-[#98A869] min-h-screen flex flex-col items-center'>
      
      <section className='relative flex items-center justify-center w-full min-h-screen'>
        <svg width="100%" className='lg:h-[140px] md:h-[118px] sm:h-[94px] h-[82px] relative z-99'>
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              // fontSize="150"
              dominantBaseline="middle"
              className="font-Bricolage font-extrabold lg:text-9xl md:text-8xl text-7xl"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow)"
              >
                Service
              </text>
          </svg>
        <img
          src={line}
          alt=""
          className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-0"
        />
      </section>

      <div className='flex flex-col justify-center items-center gap-10 px-4 md:px-12 pb-20 w-full max-w-6xl'>
        <div className='flex flex-col justify-center items-center md:gap-20 gap-10 md:p-12 p-7'>
          {/* <h2 className='md:text-6xl text-4xl text-white text-center font-Britania font-bold text-stroke-5'>
            Integrated System Advo
          </h2> */}
          <svg width="100%" height="70">
            <defs>
              <filter id="dropshadow1">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              // fontSize="40"
              dominantBaseline="middle"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow1)"
              >
                 <tspan className="font-Britania lg:text-6xl md:text-4xl text-2xl"> Integrated System Advo</tspan>
              </text>
          </svg>
          <p className='text-white md:text-3xl text-lg text-center font-Bricolage'>
            Informasi narahubung sebagai Call Center pelayanan Advokesma dan Informasi narahubung FIA UB
          </p>
          <a className='font-Bricolage text-xl font-semibold bg-[#FDC2D6] p-2 px-10 rounded-4xl cursor-pointer' href='https://linktr.ee/AdvokesmaBEMFIAUB' target='_blank' rel="noopener noreferrer" >Click Here</a>
        </div>

        <div className='flex flex-col justify-center items-center gap-20 md:p-12 p-7'>
          <svg width="100%" height="70">
            <defs>
              <filter id="dropshadow1">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              // fontSize="40"
              dominantBaseline="middle"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow1)"
              >
                 <tspan className="font-Britania lg:text-6xl md:text-4xl text-2xl"> Ruang Aman</tspan>
              </text>
          </svg>
          <p className='text-white md:text-3xl text-lg text-center sfont-Bricolage'>
           Pengaduan dan hotline yang dibuat untuk pengaduan bagi mahasiswa serta civitas akademika FIA UB apabila mendapati/melihat perlakuan kekerasan atau perundungan di lingkungan kampus. 
          </p>
          <a className='font-Bricolage text-xl font-semibold bg-[#FDC2D6] p-2 px-10 rounded-4xl cursor-pointer relative z-99' href='http://bit.ly/FormPengaduanRuangAman' target='_blank' rel="noopener noreferrer">Click Here</a>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import "../cardStyle.css"

export default function Card() {
  return (
<div>


<div className='container flex justify-center'>
      <ul id='cards'>
        <div className='card'  id='card1'>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 bg-white'>
            <div className='card-title bg-[#FDC2D6] w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Inclusive Bootcamp (Masive Camp)</h1>
            </div>
            <div>
              <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2'>Kementerian Advokasi & Kesejahteraan Mahasiswa</h2>
            </div>
          </div>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#F0BD51]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Talent Project (Mata Project)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2'>Kementerian Pemberdayaan Mahasiswa</h2>
          </div>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#98A869]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Social Impact (Masimpact)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2'>Kementerian Sosial Masyarakat</h2>
          </div>
        </div>
        <li className='card'  id='card2'>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
          <div className='card-title bg-[#FDC2D6]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Business Summit (MBS)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2' >Biro Ekonomi
            Kreatif</h2>
          </div>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#F0BD51]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Efficiency Boost (MaFEst)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2' >Satuan Pendayagunaan Aparatur & Reformasi Organisasi</h2>
          </div>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#98A869]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Institute</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2' >Kementerian Kajian & Aksi Strategis</h2>
          </div>
        </li>
        <li className='card '  id='card3'>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
          <div className='card-title bg-[#FDC2D6]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl'>MaFIA Industry Insight (Minsight)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2 '>Kementerian Dalam & Luar Negeri</h2>
          </div>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#F0BD51]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania text-3xl text-center'>MaFIA Research Innovation Forum (Marinovation)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2'>Kementerian Riset & Inovasi Karya</h2>
          </div>
          <div className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#98A869]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3' >
              <h1 className='font-Britania text-3xl text-center'>MaFIA Grow Fest (G-Fest)</h1>
            </div>
            <h2 className='font-Bricolage font-extrabold text-2xl text-center p-2'>Kementerian Pemberdayaan Mahasiswa</h2>
          </div>
        </li>
       
      </ul>
    </div>
    </div>
  )
}

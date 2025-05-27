import React from 'react';
import "../cardStyle.css"
import { HashLink } from 'react-router-hash-link';

export default function Card() {
  return (
<div>


<div className='container flex justify-center'>
      <ul id='cards'>
        <div className='card'  id='card1'>
          <HashLink to={"/program-kerja#MaFIA-Inclusive-Bootcamp"} className='card-body flex flex-col justify-start max-h-[500px] border-3 bg-white'>
            <div className='card-title bg-[#FDC2D6] w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Inclusive Bootcamp (Masive Camp)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2'>Kementerian Advokasi & Kesejahteraan Mahasiswa</h2>
            </div>
          </HashLink>
          <HashLink to={"/program-kerja#MaFIA-Talent-Project"} className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#F0BD51]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Talent Project (Mata Project)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2'>Kementerian Pemberdayaan Mahasiswa</h2>
            </div>
          </HashLink>
          <HashLink to={"/program-kerja#MaFIA-Social-Impact"}  className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#98A869]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Social Impact (Masimpact)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2'>Kementerian Sosial Masyarakat</h2>
            </div>
          </HashLink>
        </div>
        <li className='card'  id='card2'>
          <HashLink to={"/program-kerja#MaFIA-Bussines-Submit"}  className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
          <div className='card-title bg-[#FDC2D6]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Bussines Submit (MBS)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2' >Biro Ekonomi
              Kreatif</h2>
            </div>
          </HashLink>
          <HashLink to={"/program-kerja#MaFIA-Efficiency-Boost"}   className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#F0BD51]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Efficiency Boost (MaFEst)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2' >Satuan Pendayagunaan Aparatur & Reformasi Organisasi</h2>
            </div>
          </HashLink>
          <HashLink to={"/program-kerja#MaFIA-Institute"}   className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#98A869]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Institute</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2' >Kementerian Kajian & Aksi Strategis</h2>
            </div>
          </HashLink>
        </li>
        <li className='card '  id='card3'>
          <HashLink to={"/program-kerja#MaFIA-Industry-Insight"}   className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
          <div className='card-title bg-[#FDC2D6]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Industry Insight (Minsight)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2'>Kementerian Dalam & Luar Negeri</h2>
            </div>
          </HashLink>
          <HashLink to={"/program-kerja#MaFIA-Research-n-Innovation-Forum"}   className='card-body flex flex-col justify-start max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#F0BD51]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3'>
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>MaFIA Research Innovation Forum (Marinovation)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2'>Kementerian Riset & Inovasi Karya</h2>
            </div>
          </HashLink>
          <HashLink to={"/program-kerja#MaFIA-Grow-Fest"}   className='card-body flex flex-col max-h-[500px] border-3 p-0 m-0 bg-white'>
            <div className='card-title bg-[#98A869]  w-full h-[80%] rounded-[16px] p-5  flex justify-center items-center border-[1.5px] border-b-3' >
              <h1 className='font-Britania  lg:text-3xl md:text-2xl sm:text-xl text-lg  text-center'>MaFIA Grow Fest (G-Fest)</h1>
            </div>
            <div className='h-[20%] flex items-center'>
              <h2 className='font-Bricolage font-extrabold xl:text-xl lg:text-lg sm:text-sm text-xs text-center p-2'>Kementerian Pemberdayaan Mahasiswa</h2>
            </div>
          </HashLink>
        </li>
       
      </ul>
    </div>
    </div>
  )
}

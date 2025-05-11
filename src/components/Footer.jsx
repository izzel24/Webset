import React from 'react'
import email from '../assets/Email Icon.svg'
import whatsapp from '../assets/whatsapp icon.svg'
import instagram from '../assets/Instagram icon.svg'
import tiktok from '../assets/tiktok icon.svg'
import x from '../assets/X icon.svg'
import linkedin from '../assets/linkedin icon.svg'
import youtube from '../assets/youtube icon.svg'
import spotify from '../assets/spotify icon.svg'

export default function Footer() {
  return (
    <div className='h-[260px] sm:p-8 p-2 m-0 relative bg-[#1E1D1D] grid sm:grid-cols-3 grid-cols-2  items-end  sm:justify-items-center'>
        
      <div className='sm: max-w-[350px] flex flex-col items-center sm:items-start gap-2'>
        <h1 className='font-Bricolage font-bold text-white sm:text-2xl text-md'>ALAMAT</h1>
        <p className='font-Bricolage font-light text-white sm:text-sm text-xs sm:text-start text-center'>Gedung Krida Mahasiswa Fakultas Ilmu Administrasi Lt 1 Jalan. MT Haryono No. 163, Ketawanggede, Kec. Lowokwaru, Kota Malang</p>
      </div>
      <div className='sm:max-w-[350px]  flex flex-col items-center sm:items-start gap-2'>
        <h1 className='font-Bricolage font-bold text-white sm:text-2xl text-md'>NARAHUBUNG</h1>
        <p className='font-Bricolage font-light flex items-center gap-2 text-white sm:text-sm text-xs'><img src={email} alt="" className='sm:h-full h-[20px]' /> bemfiaub@gmail.com</p>
        <div className='hidden gap-2 flex-wrap sm:flex '>
            <img src={whatsapp} alt="" className='sm:h-full h-[30px] max-h-[35px]'/>
            <img src={instagram} alt="" className='sm:h-full h-[30px]  max-h-[35px]'  />
            <img src={tiktok} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={x} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={linkedin} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={youtube} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={spotify} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
        </div>
      </div>
      <div className='flex sm:hidden gap-2 col-span-2 justify-center'>
        <img src={whatsapp} alt="" className='sm:h-full h-[30px] max-h-[35px]'/>
            <img src={instagram} alt="" className='sm:h-full h-[30px] max-h-[35px]'  />
            <img src={tiktok} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={x} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={linkedin} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={youtube} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
            <img src={spotify} alt="" className='sm:h-full h-[30px] max-h-[35px]' />
      </div>
      <div className='sm:max-w-[350px] flex flex-col gap-2 sm:col-auto col-span-2'>
        <h1 className='font-Bricolage font-semibold text-white sm:text-4xl sm:text-right text-center '>Satukan Cita, Tumbuh Bersama!</h1>
      </div>
    </div>
  )
}

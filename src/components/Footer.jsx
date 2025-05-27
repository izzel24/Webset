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
    <div className='min-h-[260px] sm:p-8 p-2 m-0 relative bg-[#1E1D1D] grid sm:grid-cols-3 grid-cols-1 items-end sm:justify-items-center justify-items-center'>
        
      <div className='sm: max-w-[350px] flex flex-col items-center sm:items-start gap-2 sm:col-span-1 col-span-2 mt-auto'>
        <h1 className='font-Bricolage font-bold text-white sm:text-2xl text-md sm:text-start text-center '>ALAMAT</h1>
        <p className='font-Bricolage font-light text-white sm:text-sm text-xs sm:text-start text-center'>Gedung Krida Mahasiswa Fakultas Ilmu Administrasi Lt 1 Jalan. MT Haryono No. 163, Ketawanggede, Kec. Lowokwaru, Kota Malang</p>
      </div>
      <div className='sm:max-w-[350px]  flex flex-col items-center sm:items-start gap-2'>
        <h1 className='font-Bricolage font-bold text-white sm:text-2xl text-md'>NARAHUBUNG</h1>
        <p className='font-Bricolage font-light flex items-center gap-2 text-white sm:text-sm text-xs'><img src={email} alt="" className='sm:h-full h-[20px]' /><a href="mailto:bemfiaub@gmail.com"><u>bemfiaub@gmail.com</u></a></p>
        <div className='hidden gap-2 flex-wrap sm:flex '>
            <a href="https://wa.me/6287787122025" target='_blank'><img src={whatsapp} alt="" className='sm:h-full h-[30px] max-h-[35px]'/></a>
            <a href="https://www.instagram.com/bemfiaub?igsh=MXEzMWg4NHg4dTY3Mw==" target='_blank'><img src={instagram} alt="" className='sm:h-full h-[30px]  max-h-[35px]'  /></a>
            <a href="https://www.tiktok.com/@bemfiaub?_t=ZS-8wgJhET2fkC&_r=1" target='_blank'><img src={tiktok} alt="" className='sm:h-full h-[30px] max-h-[35px]' /></a>
            <a href="https://x.com/bemfiaub_?s=21&t=ifT079ImiuwBck1S1Dsxdw" target='_blank'><img src={x} alt="" className='sm:h-full h-[30px] max-h-[35px]' /></a>
            <a href="https://www.linkedin.com/company/badan-eksekutif-mahasiswa-fia-ub/" target='_blank'><img src={linkedin} alt="" className='sm:h-full h-[30px] max-h-[35px]' /></a>
            <a href="https://youtube.com/@bemfiaub2078?si=5wuLNB__1ujOguji" target='_blank'><img src={youtube} alt="" className='sm:h-full h-[30px] max-h-[35px]' /></a>
            <a href="https://open.spotify.com/artist/18870MR7xHlX180k7GQeXh?si=bYsbtVMzRgK2iHAqcs_vDA" target='_blank'><img src={spotify} alt="" className='sm:h-full h-[30px] max-h-[35px]' /></a>
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

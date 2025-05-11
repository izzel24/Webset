import React from 'react'
import visi from "../assets/Visi.png"
import misi from "../assets/Misi.png"

export default function VisiMisi() {
  return (
    <div className='bg-[#98A869] md:p-5 p-2 w-full'>
            <div className='min-h-screen relative lg:p-10 p-7'>
            
            <div className='flex flex-col gap-10'>
            <div className='w-full flex flex-col'>
                <img src={visi} alt="" className='md:w-[250px] w-[150px]'/>
                <span className='font-EB-Garamond md:text-3xl text-xl font-medium'><span className='font-extrabold'>Tumbuh Bersama </span>mewujudkan <span className='italic'>Collaborative Governance</span> melalui <span className='font-extrabold'>Kolaborasi Karya dan Aksi Bermakna </span>selaras <span className='italic'>Student and Organization Needs.</span></span>
            </div>
            <div className='w-full flex flex-col gap-5'>
                <img src={misi} alt="" className='md:w-[250px] w-[150px]'/>
                <div className='grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 items-center justify-items-center md:gap-10 gap-5'>
                    <div className='border-2 flex flex-col w-full h-auto justify-center items-center text-center md:p-5 p-2 md:max-w-[650px] md:h-[300px] min-h-[250px]'>
                        <div className='font-EB-Garamond font-bold md:text-5xl text-lg'>1</div>
                        <span className='font-EB-Garamond md:text-xl text-xs  font-medium'><span className='font-extrabold'>Aksi Pelayanan Terintegrasi</span> melalui Proaktif Aspirasi dan Advokasi Adaptif yang selaras dengan Student and Organization Needs </span>
                    </div>
                    <div className='border-2 flex flex-col w-full h-auto justify-center items-center text-center md:p-5 p-2 md:max-w-[650px] md:h-[300px] min-h-[250px]'>
                        <div className='font-EB-Garamond font-bold md:text-5xl text-lg'>2</div>
                        <span className='font-EB-Garamond md:text-xl text-xs font-medium'><span className='font-extrabold'>Aksi Pengembangan Optimal</span> melalui Peningkatan Kapasitas Mahasiswa, Support Inovasi serta Kolaborasi Karya berbasis Human Centered Development </span>
                    </div>
                    <div className='border-2 flex flex-col w-full h-auto justify-center items-center text-center md:p-5 p-2 md:max-w-[650px] md:h-[300px] min-h-[250px]'>
                        <div className='font-EB-Garamond font-bold md:text-5xl text-lg'>3</div>
                        <span className='font-EB-Garamond md:text-xl text-xs font-medium'><span className='font-extrabold'>Aksi Pengabdian Inklusif</span> melalui Sinergi Komprehensif dan Integrasi Solusi berlandaskan Keilmuan Administrasi </span>
                    </div>
                    <div className='border-2 flex flex-col w-full h-auto justify-center items-center text-center md:p-5 p-2 md:max-w-[650px] md:h-[300px] min-h-[250px]'>
                        <div className='font-EB-Garamond font-bold md:text-5xl text-lg'>4</div>
                        <span className='font-EB-Garamond md:text-xl text-xs font-medium'><span className='font-extrabold'>Aksi Pergerakan Katalis</span> melalui Kajian Orientatif, Diskusi Progresif dan Aksi Inisiatif berorientasi pada Pressure Group dan Social Control  </span>
                    </div>
                    <div className='border-2 flex flex-col w-full h-auto justify-center items-center text-center md:p-5 p-2 md:max-w-[650px] md:h-[300px] min-h-[250px]'>
                        <div className='font-EB-Garamond font-bold md:text-5xl text-lg'>5</div>
                        <span className='font-EB-Garamond md:text-xl text-xs font-medium'><span className='font-extrabold'>Aksi Kolaborasi Sinergis </span> melalui Komunikasi Kontemporer, Diplomasi Harmonis, dan Kerjasama Berkelanjutan Mengacu Pada 
Succes Factor of Collaboration </span>
                    </div>
                    <div className='border-2 flex flex-col w-full h-auto justify-center items-center text-center md:p-5 p-2 md:max-w-[650px] md:h-[300px] min-h-[250px]'>
                        <div className='font-EB-Garamond font-bold md:text-5xl text-lg'>6</div>
                        <span className='font-EB-Garamond md:text-xl text-xs font-medium'><span className='font-extrabold'>Aksi Pengendalian Efektif </span> melalui Profesionalitas Kinerja, Akuntabilitas Program, dan Monitoring Objektif berpijak pada  Critical Succes Factor </span>
                    </div>
                </div>
            </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-1 mx-5 rounded-2xl bg-black" />
            <div className="absolute bottom-0 left-0 right-0 h-1 mx-5 bg-black rounded-2xl" />
            <div className="absolute top-2 left-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
            <div className="absolute top-2 right-0 bottom-2 w-1 my-5 rounded-2xl bg-black" />
            </div>
           
    </div>
  )
}

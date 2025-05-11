import React from 'react'
import filosofis from "../assets/filosofi.png"
import Logo9 from "../assets/pecahan logo-09.png"
import Logo8 from "../assets/pecahan logo-08.png"
import Logo7 from "../assets/pecahan logo-07.png"
import title from "../assets/Group 248.png"
import title2 from "../assets/Group 249.png"
import line from "../assets/Vector 20.svg"
import title3 from "../assets/Group 237.png"

export default function AboutUs() {
  return (
    <div className='bg-[#1E1C1C] p-5 flex flex-col w-full gap-10 '> 
        <div className='relative min-h-screen flex flex-col  items-center gap-20'>

            <div className='text-white font-EB-Garamond md:text-3xl text-sm text-justify md:p-10 p-7'>
                <span className='font-extrabold'>Badan Eksekutif Mahasiswa (BEM)</span> adalah <span className='font-semibold'>organisasi tertinggi</span> yang berperan dalam mewadahi dan menyalurkan aspirasi seluruh mahasiswa/i <span className='font-bold'>Fakultas Ilmu Administrasi di Universitas Brawijaya</span>. 
                BEM FIA UB berupaya untuk menciptakan kebermanfaatan dan perubahan bagi seluruh civitas FIA UB dengan merangkul kisah bersama, melayani mahasiswa secara prima, serta menyalurkan aspirasi yang ada dengan menjunjung tinggi nilai kebermanfaatan yang penuh makna. 
                BEM FIA UB teridiri dari <span className='font-bold'>3 Satuan, 2 Biro, 8 Kementerian</span> serta berbagai beragam program kerja yang mendukung, mengembangkan dan melayani seluruh para mahasiswa yang ada di FIA UB. 
            </div>

            
            <div className='flex flex-col w-full justify-center items-center md:p-10 p-7 gap-5'>
                <img src={filosofis} alt=""  className=' w-[500px]'/>

                <div className=' grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 justify-items-center items-center w-full  md:flex-row flex-col'>
                    <div className='max-w-[250px] flex flex-col items-center justify-center gap-5'>
                        <img src={Logo9} alt="" className='w-[150px]'/>
                        <span className='text-white text-justify font-EB-Garamond md:text-lg'><span className='font-bold'>Daun</span> menjadi simbol <span className='font-bold'>pertumbuhan bersama</span> yang berorientasi pada <span className='font-bold'>pengembangan mahasiswa dan organisasi.</span></span>
                    </div>
                    <div className='max-w-[250px] flex flex-col items-center justify-center gap-5'>
                        <img src={Logo8} alt="" className='w-[150px]'/>
                        <span className='text-white text-justify font-EB-Garamond md:text-lg'><span className='font-semibold'>Pusaran angin</span> mencerminkan <p className='font-semibold'>pergerakan dinamis kabinet</p> dalam setiap hembusan <span className='font-semibold'>advokasi, arus inovasi, dan profesionalisme karya.</span></span>
                    </div>
                    <div className='max-w-[250px] flex flex-col items-center justify-center gap-5'>
                        <img src={Logo7} alt="" className='w-[150px]'/>
                        <span className='text-white text-justify font-EB-Garamond md:text-lg text-sm'><span className='font-bold'>Tangan</span> melambangkan <span className='font-bold'>keterlibatan aktif</span> kabinet dalam <span className='font-bold'>pelayanan mahasiswa dan kolaborasi karya.</span></span>
                    </div>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center gap-10 md:p-10 p-7'>
                <img src={title} alt="" className='w-[500px]'/>
                <span className='font-EB-Garamond text-white md:text-lg text-sm text-justify'>
                    Fakultas Ilmu Administrasi (FIA) merupakan rumah besar bagi para insan akademis, pengabdi, dan pencipta. FIA terbentuk dari banyak sekali simpul yang saling terhubung. Setiap simpul memiliki mimpi dan cita-cita bersama untuk tumbuh. Maka kami percaya seluruh simpul FIA harus Tumbuh Bersama melalui karya-karya terbaik, kolaborasi harmonis, dan aksi bermakna untuk FIA, Brawijaya dan Indonesia.
                </span>

                <span className='text-white md:text-lg text-sm font-EB-Garamond text-justify'>
                    <span className='font-semibold'>“Tumbuh Bersama”</span> Langkah-langkah dan upaya untuk <span className='font-semibold'>me-”Rengkuh Bersama”</span> seluruh simpul FIA harus kembali menjadi cita-cita bersama dan “langkah bermakna” yang nyata. Namun, tidak hanya berhenti disitu upaya “Tumbuh Bersama” juga harus menjadi kesepahaman dan cita-cita bersama seluruh simpul FIA. <span className='italic font-medium'> Etimologis: Tumbuh : tumbuh/tum·buh/ v timbul (hidup) dan bertambah besar atau sempurna Bersama : sama1 » ber.sa.ma v kerjasama, kebersamaan, dan kolaborasi</span>. Filosofis: nama <span className='font-semibold'> "Tumbuh Bersama"</span> menggambarkan komitmen kabinet BEM FIA 2025 untuk <span className='font-semibold'>menciptakan lingkungan yang mendukung pertumbuhan kolektif bagi seluruh simpul FIA.</span> Filosofi ini mencakup pengembangan diri mahasiswa sekaligus penguatan organisasi mahasiswa itu sendiri. Nama ini menekankan pentingnya kerjasama strategis yang berbasis tujuan jangka panjang, kolaborasi inovatif untuk menghasilkan solusi nyata, dan sinergi lintas sektor demi mencapai dampak yang berkelanjutan.
                </span>
            </div>

            <div className='flex flex-col w-full md:gap-5 gap-10 relative '>
                <div className='flex flex-col gap-5 md:p-10 p-7 relative z-99'>
                    <img src={title2} alt="" className='w-[450px]' />
                    <span className='font-Britania text-[#98A869] md:text-7xl text-xl max-w-[800px] relative z-99' >“CIA-CIO” Collaboration, Integration, Adaptation, Catalyst, Inclusive, Optimation</span>
                </div>
               
                <img src={line} alt="" className='w-full absolute top-0 z-10 md:flex hidden' />

                <div className='flex flex-col gap-5 mt-20 md:p-10 p-7 items-end w-full relative z-99'>
                    <img src={title3} alt="" className='w-[450px]'/>
                    <span className='font-Britania text-[#98A869] md:text-7xl text-xl max-w-[800px] text-end'>Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tutwuri Handayani</span>
                </div>
            </div>

            

            <div className="absolute top-0 left-0 right-0 h-1 mx-5 rounded-2xl bg-white" />
            <div className="absolute bottom-0 left-0 right-0 h-1 mx-5 bg-white rounded-2xl" />
            <div className="absolute top-2 left-0 bottom-2 w-1 my-5 rounded-2xl bg-white" />
            <div className="absolute top-2 right-0 bottom-2 w-1 my-5 rounded-2xl bg-white" />
        </div>
    </div>
  )
}

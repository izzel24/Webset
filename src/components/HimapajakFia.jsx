import React from "react";
import Himapajak from "../assets/LOGO HIMAPAJAK.png";

export default function HimapajakFia() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-cover bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${Himapajak})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          HIMAPAJAK
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
            Himpunan Mahasiswa Perpajakan (HIMAPAJAK) merupakan himpunan yang
            menaungi Mahasiswa Perpajakan Fakultas Ilmu Administrasi, Universitas
            Brawijaya, Malang. Berdiri sejak Desember 2012 dengan tahun
            kepengurusan pertama tahun 2013, HIMAPAJAK bergerak dalam bidang
            akademisi sehingga seluruh kegiatan dan program kerja berlandaskan
            pada akademik dan keilmuan. HIMAPAJAK bertujuan untuk meningkatkan
            daya saing kualitas mahasiswa perpajakan di Indonesia serta terus
            berkontribusi untuk peningkatan kualitas mutu Program Studi Perpajakan
            Fakultas Ilmu Administrasi Universitas Brawijaya.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/himapajakfiaub/" target="_blank">
              <u>himapajakfiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
               Line: @ABE6659C
             </p>
        </div>
      </div>
    </div>
  );
}

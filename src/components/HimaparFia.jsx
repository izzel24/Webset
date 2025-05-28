import React from "react";
import himapar from "../assets/LOGO HIMAPAR.jpg";

export default function HimaparFia() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-cover bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${himapar})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          HIMAPAR
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          HIMAPAR (Himpunan Mahasiswa Pariwisata) adalah sebuah organisasi yang
          menaungi mahasiswa Pariwisata pada Fakultas Ilmu Administrasi
          Universitas Brawijaya. HIMAPAR memiliki fungsi sebagai wadah bagi
          mahasiswa pariwisata untuk mengembangkan soft skill serta hard skill
          mereka terutama bidang pariwisata. Selain itu, HIMAPAR juga memiliki
          fungsi sebagai jembatan guna menampung dan menyampaikan aspirasi para
          mahasiswa pariwisata.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/himaparfiaub/" target="_blank">
              <u>himaparfiaub</u>
            </a>
          </p>
          {/* <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Line: @ABE6659C
          </p> */}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import hmpip from "../assets/Logo HMPIP.png";

export default function Hmpip() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${hmpip})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          HMPIP
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Himpunan Mahasiswa Prodi Ilmu Perpustakaan adalah Lembaga Otonomi
          Fakultas Ilmu Administrasi Universitas Brawijaya yang berdiri pada 22
          Desember 2014. HMPIP memiliki fungsi sebagai organisasi kemahasiswaan
          yang berkoordinasi dengan lembaga-lembaga lain baik di dalam maupun
          luar FIA UB. Selain itu, peran dari HMPIP sendiri sebagai organisasi
          keilmuan yang berperan aktif dalam dunia kemahasiswaan, perguruan
          tinggi, dan kepemudaan untuk menopang pembangunan nasional.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/hmpipfiaub/" target="_blank">
              <u>hmpipfiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 089612345454 (HMPIP FIA UB)
          </p>
        </div>
      </div>
    </div>
  );
}

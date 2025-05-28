import React from "react";
import Himabis from "../assets/Logo Himabis.png";

export default function HimabisFIa() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-cover bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${Himabis})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          HIMABIS
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Himpunan Mahasiswa Jurusan Administrasi Bisnis (HIMABIS) adalah
          organisasi yang berperan aktif dalam mewadahi dan menyalurkan aspirasi
          seluruh mahasiswa Jurusan Administrasi Bisnis di Universitas Brawijaya
          yang meliputi program studi Administrasi Bisnis, Administrasi
          Perpajakan, Bisnis Internasional, dan Bisnis Pariwisata dan Fakultas
          Ilmu Administrasi secara umum. Himpunan ini pada awalnya bernama
          HUMANIA (Himpunan Mahasiswa Administrasi Niaga). Namun karena terjadi
          perubahan nomenklatur dari Administrasi Niaga menjadi Administrasi
          Bisnis, maka nama HUMANIA pun berganti menjadi HIMABIS.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/himabis/" target="_blank">
              <u>himabis</u>
            </a>
          </p>
          {/* <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            CP: ‪082228293713‬ (nayyara)
          </p> */}
        </div>
      </div>
    </div>
  );
}

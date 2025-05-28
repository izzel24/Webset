import React from "react";
import dpm from "../assets/LOGO DPM.png";

export default function DpmFIa() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${dpm})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          DPM FIA UB
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          DPM FIA UB merupakan lembaga yang tergabung dalam LKM FIA UB yang
          memiliki fungsi legislasi, anggaran, dan pengawasan. DPM FIA UB
          memiliki peran menjembatani kepentingan mahasiswa kepada dekanat,
          lembaga, dan sesama mahasiswa yang diwujudkan melalui aspirasi,
          keluhan, dan kejelasan informasi. DPM FIA UB memiliki 3 (tiga) komisi
          yang membantu tugas pokok dan fungsi yang bertanggungjawab kepada
          publik yaitu Advokasi, Undang-Undang, dan Kelembagaan.
        </p>
        <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
          Instagram:{" "}
          <a href="https://www.instagram.com/dpmfiaub_/" target="_blank">
            <u>dpmfiaub_</u>
          </a>
        </p>
      </div>
    </div>
  );
}

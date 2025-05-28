import React from "react";
import aec from "../assets/LOGO AEC.png"

export default function Aec() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${aec})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          AEC
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Administration English Club merupakan salah satu bagian dari Lembaga
          Otonom Fakultas FIA UB yang bergerak di bidang pengembangan kemampuan
          berbahasa Inggris mahasiswa. AEC memiliki visi menjadi fasilitator
          dalam menumbuhkan budaya pengembangan kemampuan bahasa Inggris yang
          unggul, yang dapat diperoleh mahasiswa FIA melalui pengembangan
          kreativitas, inovasi, dan kontribusi yang berkelanjutan. Kegiatan
          pengembangan kemampuan berbahasa Inggris meliputi bidang speech,
          storytelling, essay, debat, dan newscasting.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/aecbrawijaya/" target="_blank">
              <u>aecbrawijaya</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            CP: 082230597179 (Melani)
          </p>
        </div>
      </div>
    </div>
  );
}

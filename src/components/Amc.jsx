import React from "react";
import amc from "../assets/logo amc.png";

export default function Amc() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${amc})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          AMC
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Administration Music Club merupakan Lembaga Otonomi Fakultas, Fakultas
          Ilmu Administrasi Universitas Brawijaya Malang yang selanjutnya
          disebut AMC FIA UB. AMC FIA UB berdiri pada tanggal 12 Mei 1992 di
          Fakultas Ilmu Administrasi Universitas Brawijaya Malang. AMC FIA UB
          berkedudukan di Fakultas Ilmu Administrasi Universitas Brawijaya
          Malang. Kegiatan AMC FIA UB yaitu Menyelenggarakan kegiatan di bidang
          musik dan Mengadakan pelatihan dan pengembangan bakat, pengetahuan,
          keterampilan, dan keorganisasian khususnya di bidang musik dan event
          organizing.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/amcfiaub/" target="_blank">
              <u>amcfiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 081214815752 (Grace Monica)
          </p>
        </div>
      </div>
    </div>
  );
}

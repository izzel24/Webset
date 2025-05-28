import React from "react";
import mafioso from "../assets/Logo MAFIOSO.PNG"

export default function Mafioso() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${mafioso})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          MAFIOSO
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          MAFIOSO adalah lembaga bersifat otonom atau independen yang
          berkoordinasi dengan BEM, MPM, DPM dan lembaga lainnya yang berada
          pada FIA maupun diluar FIA. Mafioso terdiri dari beberapa kementrian
          yaitu Kementrian Kelembagaan dan Kementrian Keatlitan. Di Kementrian
          kelembagaan ada beberapa divisi, yaitu divisi HUMAS, divisi Dana Usaha
          dana divisi Kerumahtanggaan (Pengembangan Sumber Daya Organisasi).
          Sedangkan di Kementrian Keatlitan ada beberapa cabor yaitu Basket,
          Futsal, Tenis Meja, Bulutangkis, dan Voli.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/mafiosofiaub/" target="_blank">
              <u>mafiosofiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 081233961273
          </p>
        </div>
      </div>
    </div>
  );
}

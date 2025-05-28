import React from "react";
import forkim from "../assets/forkim.jpg";

export default function Forkim() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-cover bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${forkim})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          FORKIM
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Forum Kajian Islam (FORKIM) adalah sebuah Lembaga Dakwah tingkat
          Fakultas yang didirikan pada 10 November 2001, kehadiran nya bertujuan
          untuk membangun karakter mahasiswa muslim, mensyiarkan pemahaman
          Islam, dan menjadi sarana untuk berkreasi sekaligus mendalami ilmu
          agama. Target organisasi ini adalah melahirkan mahasiswa-mahasiswa
          yang cerdas intelektual dan agama, mahasiswa yang condong terhadap
          Islam, dan agen-agen dakwah karena sejatinya dakwah adalah perubahan
          menuju tatanan yang sempurna.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/forkimofficial/" target="_blank">
              <u>forkimofficial</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 089528353335 (Humas Ikhwan),
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 0813-3172-3853 (Humas Akhwat)
          </p>
        </div>
      </div>
    </div>
  );
}

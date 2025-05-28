import React from "react";
import hmn from "../assets/LOGO HUMANISTIK.PNG";

export default function Humanistik() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-cover bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${hmn})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          HUMANISTIK
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Himpunan Mahasiswa Departemen Administrasi Publik merupakan Lembaga
          Eksekutif ditingkat Departemen yang berada dalam lingkungan LKM UB,
          LKM FIA yang berkoordinasi dengan BEM, DPM, dan lembaga lainnya baik
          didalam maupun diluar FIA. HUMANISTIK berperan dalam menghimpun
          mahasiswa Departemen Admininstrasi Publik untuk memberikan pelayanan
          serta pengembangan sesuai dengan keilmuan Administrasi Publik.
          HUMANISTIK sendiri bersifat independen serta memiliki tujuan
          terbinanya insan akademis pencipta dan pengabdi yang bernafaskan
          Pancasila.
        </p>
        <div>
            <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
                <a href="https://www.instagram.com/humanistikfia/" target="_blank">
                    <u>@humanistikfia</u>
                </a>
            </p>
            <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">CP: ‪082228293713‬ (nayyara)</p>
        </div>
      </div>
    </div>
  );
}

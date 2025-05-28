import React from "react";
import ssm from "../assets/LOGO SSM.PNG"

export default function Ssm() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${ssm})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          SSM
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Sanggar Seni Mahasiswa (SSM) SSM merupakan lembaga otonomi fakultas
          dengan nama awal teater Arca. Namun, seiring berjalannya waktu, alumni
          mengusulkan agar teater arca ini dijadikan lembaga resmi untuk
          menampung bakat atau sebagai wadah bagi mahasiswa FIA untuk
          mengembangkan bakat yang ada. Maka itu disusulkan kepada dekan FIA
          agar teater Arca berubah menjadi LOF (Lembaga Otonomi Fakultas) resmi
          dengan syarat harus memiliki nama, simbol, adrt, dan sebagainya.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/ssmfiaub/" target="_blank">
              <u>ssmfiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 081313622106 (Lady)
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import sec from "../assets/LOGO SEC.png";

export default function SEC() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${sec})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          SEC
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Student Entrepreneur Center (SEC) adalah singkatan dari Student
          Entrepreneur Center, yakni sebuah Lembaga Otonom Fakultas (LOF) di
          bawah naungan Fakultas Ilmu Administrasi Universitas Brawijaya (FIA
          UB) yang bergerak di bidang pengembangan kewirausahaan. Sebagai
          organisasi yang berfokus pada kewirausahaan, SEC menjadi wadah bagi
          mahasiswa FIA UB untuk mengembangkan soft skills di bidang tersebut.
          Selain itu, SEC juga menjadi ruang bagi mahasiswa yang telah memiliki
          usaha agar dapat mengasah keterampilan, meningkatkan produktivitas,
          serta mendorong kreativitas dalam menjalankan kegiatan wirausaha
          mereka.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/sec_fiaub/" target="_blank">
              <u>sec_fiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            CP: 081336574296 (Cantika)
          </p>
        </div>
      </div>
    </div>
  );
}

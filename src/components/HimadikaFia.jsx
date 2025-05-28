import React from "react";
import himadika from "../assets/LOGO HIMADIKA.png"

export default function HimadikaFia() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-cover bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${himadika})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          HIMADIKA
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          HIMADIKA adalah Himpunan Mahasiswa Program Studi Administrasi
          Pendidikan Fakultas Ilmu Administrasi Universitas Brawijaya yang
          dimana merupakan organisasi mahasiswa lingkup fakultas yang menaungi
          seluruh mahasiswa Administrasi Pendidikan untuk menunjang pengembangan
          softskill dan hardskill dari mahasiswa Administrasi Pendidikan serta
          memberikan pelayanan advokasi bagi seluruh mahasiswa program
          studi Administrasi Pendidikan dan bergerak dalam bidang sosial
          masyarakat serta menjalin kolaborasi dan hubungan antar organisasi
          baik dilingkup internal maupun eksternal FIA.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/himadika_fiaub/" target="_blank">
              <u>himadika_fiaub</u>
            </a>
          </p>
          {/* <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
                   Line: @ABE6659C
                 </p> */}
        </div>
      </div>
    </div>
  );
}

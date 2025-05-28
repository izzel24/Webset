import React from "react";
import rsc from "../assets/Logo RSC HP.png";

export default function Rsc() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${rsc})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          RSC
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Research Study Club adalah Lembaga Otonomi Fakultas di Fakultas Ilmu
          Administrasi Universitas Brawijaya yang bergerak di bidang penelitian
          dan penulisan. Fungsi dari RSC adalah sebagai organisasi pengkaderan
          yang mewadahi pengembangan di bidang penelitian. Tujuan dari RSC
          adalah menciptakan insan akademis, pengabdi dan pencipta yang
          bertanggungjawab serta membentuk mahasiswa yang peka terhadap
          lingkungan sekitar. Berdasarkan dari tujuan RSC yang tergambar dalam
          AD/ART tersebut, kegiatan yang dilakukan RSC meliputi penelitian,
          penulisan serta pengembangan keilmuan anggota.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/rscfiaub/" target="_blank">
              <u>rscfiaub</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 0895403825427 (nafia)
          </p>
        </div>
      </div>
    </div>
  );
}

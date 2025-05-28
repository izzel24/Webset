import React from "react";
import dianns from "../assets/LOGO DIANNS.png"

export default function Dianns() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${dianns})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          DIANNS
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Berdiri sejak 26 November 1981, Lembaga Pers Mahasiswa DIANNS (LPM
          DIANNS) merupakan Lembaga Otonomi Fakultas (LOF) Fakultas Ilmu
          Administrasi Universitas Brawijaya yang bergerak di bidang
          jurnalistik. Menjadi ruang publik untuk menyalurkan gagasan melalui
          produk jurnalistik yang berkualitas sesuai dengan kode etik
          jurnalistik sebagai wujud pemberdayaan masyarakat. Selain itu, lembaga
          ini ada sebagai wadah untuk memperjuangkan nilai-nilai kerakyatan
          dengan mengangkat isu-isu sosial melalui produk jurnalistik.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/diannsmedia/"
              target="_blank"
            >
              <u>diannsmedia</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA: 085155279116 (Agif)
          </p>
        </div>
      </div>
    </div>
  );
}

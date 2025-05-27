import React, { useEffect, useState } from "react";
import dpm from "../assets/LOGO DPM.png";

export default function PartnerLayout() {
  const [preserveAspectRatio, setPreserveAspectRatio] = useState("none");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setPreserveAspectRatio("xMidYMin slice");
      } else {
        setPreserveAspectRatio("none");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen mb-48 py-20">
      <div className="flex flex-col relative">
        {/* Bagian SVG background */}
       <svg
          width="100%"
          height="200"
          viewBox="0 0 1920 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0"
        >
          <path
            d="M-61 78.9744C-61 35.358 -25.642 0 17.9744 0C61.5907 0 96.9487 35.358 96.9487 78.9744V115.451H-61V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M410 78.9744C410 35.358 445.358 0 488.974 0C532.591 0 567.949 35.358 567.949 78.9744V115.451H410V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M881 78.9744C881 35.358 916.358 0 959.974 0C1003.59 0 1038.95 35.358 1038.95 78.9744V115.451H881V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M1353 78.9744C1353 35.358 1388.36 0 1431.97 0C1475.59 0 1510.95 35.358 1510.95 78.9744V115.451H1353V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M96 78.9744C96 35.358 131.358 0 174.974 0C218.591 0 253.949 35.358 253.949 78.9744V115.451H96V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M567 78.9744C567 35.358 602.358 0 645.974 0C689.591 0 724.949 35.358 724.949 78.9744V115.451H567V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M1038 78.9744C1038 35.358 1073.36 0 1116.97 0C1160.59 0 1195.95 35.358 1195.95 78.9744V115.451H1038V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M1510 78.9744C1510 35.358 1545.36 0 1588.97 0C1632.59 0 1667.95 35.358 1667.95 78.9744V115.451H1510V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M253 78.9744C253 35.358 288.358 0 331.974 0C375.591 0 410.949 35.358 410.949 78.9744V115.451H253V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M724 78.9744C724 35.358 759.358 0 802.974 0C846.591 0 881.949 35.358 881.949 78.9744V115.451H724V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M1195 78.9744C1195 35.358 1230.36 0 1273.97 0C1317.59 0 1352.95 35.358 1352.95 78.9744V115.451H1195V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M1667 78.9744C1667 35.358 1702.36 0 1745.97 0C1789.59 0 1824.95 35.358 1824.95 78.9744V115.451H1667V78.9744Z"
            fill="#98A869"
          />
          <path
            d="M1824 78.9744C1824 35.358 1859.36 0 1902.97 0C1946.59 0 1981.95 35.358 1981.95 78.9744V115.451H1824V78.9744Z"
            fill="#98A869"
          />
        </svg>

        {/* Bagian hijau besar */}
        <div className="md:h-[200vh] h-screen bg-[#98A869] relative">
          {/* SVG garis lengkung */}
          <svg
            className="absolute top-[20%] left-0 w-full md:h-[800px] h-[350px]"
            viewBox="0 0 1920 1088"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio={preserveAspectRatio}
          >
            <path
              d="M-326 20H281.851C507.366 20.4861 613.57 20 613.57 93.6541V975.914C617.89 1053.36 691.895 1071.1 921.978 1067.58H2321"
              stroke="#334075"
              strokeWidth="40"
            />
          </svg>

          <div className="w-full flex">
            <div
              className="absolute md:w-48 md:h-48 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[30%] left-[50%] md:-translate-x-16 -translate-x-[152px]"
              style={{ backgroundImage: `url(${dpm})` }}
            ></div>
            <div className="flex flex-col gap-10 ml-20 p-10 absolute top-[25%] left-1/3">
              <h1 className="font-Bricolage text-[#334075] font-extrabold text-6xl">
                DPM FIA UB
              </h1>
              <p className="md:w-[50%] font-Bricolage font-medium text-xl text-[#334075]">
                DPM FIA UB merupakan lembaga yang tergabung dalam LKM FIA UB
                yang memiliki fungsi legislasi, anggaran, dan pengawasan. DPM
                FIA UB memiliki peran menjembatani kepentingan mahasiswa kepada
                dekanat, lembaga, dan sesama mahasiswa yang diwujudkan melalui
                aspirasi, keluhan, dan kejelasan informasi. DPM FIA UB memiliki
                3 (tiga) komisi yang membantu tugas pokok dan fungsi yang
                bertanggungjawab kepada publik yaitu Advokasi, Undang-Undang,
                dan Kelembagaan.
              </p>
              <p className="font-Bricolage font-medium text-xl text-[#334075]">Instagram: <a href="https://www.instagram.com/dpmfiaub_/" target="_blank"><u>dpmfiaub_</u></a></p>
            </div>
          </div>
          
        <svg width="100%" height="200" viewBox="0 0 1920 116" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0'>
            <path d="M-61 36.4768C-61 80.0931 -25.642 115.451 17.9744 115.451C61.5907 115.451 96.9487 80.0931 96.9487 36.4768V0.000488281H-61V36.4768Z" fill="#98A869"/>
            <path d="M410 36.4768C410 80.0931 445.358 115.451 488.974 115.451C532.591 115.451 567.949 80.0931 567.949 36.4768V0.000488281H410V36.4768Z" fill="#98A869"/>
            <path d="M881 36.4768C881 80.0931 916.358 115.451 959.974 115.451C1003.59 115.451 1038.95 80.0931 1038.95 36.4768V0.000488281H881V36.4768Z" fill="#98A869"/>
            <path d="M1353 36.4768C1353 80.0931 1388.36 115.451 1431.97 115.451C1475.59 115.451 1510.95 80.0931 1510.95 36.4768V0.000488281H1353V36.4768Z" fill="#98A869"/>
            <path d="M96 36.4768C96 80.0931 131.358 115.451 174.974 115.451C218.591 115.451 253.949 80.0931 253.949 36.4768V0.000488281H96V36.4768Z" fill="#98A869"/>
            <path d="M567 36.4768C567 80.0931 602.358 115.451 645.974 115.451C689.591 115.451 724.949 80.0931 724.949 36.4768V0.000488281H567V36.4768Z" fill="#98A869"/>
            <path d="M1038 36.4768C1038 80.0931 1073.36 115.451 1116.97 115.451C1160.59 115.451 1195.95 80.0931 1195.95 36.4768V0.000488281H1038V36.4768Z" fill="#98A869"/>
            <path d="M1510 36.4768C1510 80.0931 1545.36 115.451 1588.97 115.451C1632.59 115.451 1667.95 80.0931 1667.95 36.4768V0.000488281H1510V36.4768Z" fill="#98A869"/>
            <path d="M253 36.4768C253 80.0931 288.358 115.451 331.974 115.451C375.591 115.451 410.949 80.0931 410.949 36.4768V0.000488281H253V36.4768Z" fill="#98A869"/>
            <path d="M724 36.4768C724 80.0931 759.358 115.451 802.974 115.451C846.591 115.451 881.949 80.0931 881.949 36.4768V0.000488281H724V36.4768Z" fill="#98A869"/>
            <path d="M1195 36.4768C1195 80.0931 1230.36 115.451 1273.97 115.451C1317.59 115.451 1352.95 80.0931 1352.95 36.4768V0.000488281H1195V36.4768Z" fill="#98A869"/>
            <path d="M1667 36.4768C1667 80.0931 1702.36 115.451 1745.97 115.451C1789.59 115.451 1824.95 80.0931 1824.95 36.4768V0.000488281H1667V36.4768Z" fill="#98A869"/>
            <path d="M1824 36.4768C1824 80.0931 1859.36 115.451 1902.97 115.451C1946.59 115.451 1981.95 80.0931 1981.95 36.4768V0.000488281H1824V36.4768Z" fill="#98A869"/>
            </svg>
        </div>
      </div>
    </div>
  );
}

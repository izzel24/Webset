import React, { useEffect, useRef, useState } from "react";
import pinkLine from "../assets/pinkLine.svg";
import yellowLine from "../assets/yellowLine.svg";
import yellowLine2 from "../assets/yellowLine2.svg";
import blueLine from "../assets/blueLine.svg";

import Card from "../components/card";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Sliders from "../components/Sliders";
import LogoMarquee from "../components/LogoMarquee";
import Service from "../components/Service";
import Footer from "../components/Footer";
import CardsPortrait from "../components/CardsPortrait";
import Navbar from "../components/Navbar";
import star from "../assets/Group 19.svg";
import plane from "../assets/plane.svg";

export default function HomePage() {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  return (
    <div className="relative min-w-[330px]">
      <Navbar open={false} />
      <img src={pinkLine} alt="" className="absolute top-0 left-0 w-full z-1" />
      <div className="relative h-screen bg-[#334075] flex flex-col justify-center items-center min-w-[300px]">
        <img
          src={star}
          className="absolute z-1 left-10 top-10 md:w-[90px] w-[70px]"
        />
        <img
          src={star}
          className="absolute z-1 bottom-10 md:w-[70px] w-[40px] right-[50%] "
        />
        <img
          src={star}
          className="absolute z-1 bottom-52 right-16 md:w-[60px] w-[30px] "
        />
        <img
          src={plane}
          className="absolute animate-plane z-1 bottom-10 right-10 md:w-[80px] w-[50px]"
        />
        <div className="flex flex-col justify-center items-center w-full">
          <div className=" relative w-full flex justify-center gap-2 ">
            <span className="font-Bricolage lg:text-8xl md:text-5xl text-2xl text-white z-50 text-center">
              Welcome to <span className="font-extrabold">BEM FIA UB 2025</span>
            </span>
          </div>
          <h1 className="font-Bricolage lg:text-6xl md:text-3xl text-xl text-white z-50">
            Kabinet Tumbuh Bersama
          </h1>
        </div>
        <div className="absolute bottom-0 w-full">
          <img src={yellowLine} alt="" className="w-full " />
        </div>
      </div>
      <div className="min-h-screen relative flex items-center flex-col justify-center gap-10">
        <svg width="100%" height="160" className="relative z-99">
          <defs>
            <filter id="dropshadow1">
              <feDropShadow
                dx="2"
                dy="2.5"
                stdDeviation="0"
                flood-color="black"
                flood-opacity="1"
              />
            </filter>
          </defs>

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            className="font-Bricolage"
            stroke="black"
            strokeWidth="4"
            fill="#334075"
            textAnchor="middle"
            paintOrder="stroke"
            style={{
      filter:
        window.innerWidth <= 640
          ? ''
          : 'url(#dropshadow1)',
    }}
          >
            <tspan className="font-extrabold text-4xl sm:text-6xl lg:text-8xl md:text-7xl">
              Program Kerja{" "}
            </tspan>
            <tspan className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-2xl">
              Unggulan
            </tspan>
          </text>
        </svg>

        <img src={yellowLine2} alt="" className="absolute top-0 w-full z-1 " />
        <div className="relative z-99 w-full">
          {isLandscape ? (
            <Card />
          ) : (
            <div>
              <CardsPortrait
                cards={[
                  {
                    title: "MaFIA Inclusive Bootcamp (Massive Camp)",
                    body: "Kementerian Kajian & Aksi Strategis",
                    color: "#FDC2D6",
                    url: "MaFIA-Inclusive-Bootcamp"
                  },
                  {
                    title: "MaFIA Bussines Submit (MBS)",
                    body: "Biro Ekonomi Kreatif",
                    color: "#FDC2D6",
                    url: "MaFIA-Bussines-Submit"
                  },
                  {
                    title: "MaFIA Industry Insight (Minsight)",
                    body: "Kementerian Dalam & Luar Negeri",
                    color: "#FDC2D6",
                    url: "MaFIA-Industry-Insight"
                  },
                ]}
              />
              <CardsPortrait
                cards={[
                  {
                    title: "MaFIA Talent Project (Mata Project)",
                    body: "Kementerian Pemberdayaan Mahasiswa",
                    color: "#F0BD51",
                    url: "MaFIA-Talent-Project"
                  },
                  {
                    title: "MaFIA Efficiency Boost (MaFEst)",
                    body: "Satuan Pendayagunaan Aparatur & Reformasi Organisasi",
                    color: "#F0BD51",
                    url: "MaFIA-Efficiency-Boost"
                  },
                  {
                    title: "MaFIA Research Innovation Forum (Marinovation)",
                    body: "Kementerian Riset & Inovasi Karya",
                    color: "#F0BD51",
                    url: "MaFIA-Research-n-Innovation-Forum"
                  },
                ]}
              />
              <CardsPortrait
                cards={[
                  {
                    title: "MaFIA Social Impact (Masimpact)",
                    body: "Kementerian Sosial Masyarakat",
                    color: "#98A869",
                    url: "MaFIA-Social-Impact"
                  },
                  {
                    title: "MaFIA Institute",
                    body: "Kementerian Kajian & Aksi Strategis",
                    color: "#98A869",
                    url: "MaFIA-Institute"
                  },
                  {
                    title: "MaFIA Grow Fest (G-Fest)",
                    body: "Kementerian Pemberdayaan Mahasiswa",
                    color: "#98A869",
                    url: "MaFIA-Grow-Fest"
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
      <div className="min-h-screen relative flex flex-col justify-center items-center gap-10 lg:mb-40 mb-20">
        <svg width="100%" height="160" className="relative z-99">
          <defs>
            <filter id="dropshadow">
              <feDropShadow
                dx="2"
                dy="2.5"
                stdDeviation="0"
                flood-color="black"
                flood-opacity="1"
              />
            </filter>
          </defs>

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            className="font-Bricolage"
            stroke="black"
            strokeWidth="4"
            fill="#FDC2D6"
            textAnchor="middle"
            paintOrder="stroke"
            style={{
              filter:
                window.innerWidth <= 640
                  ? ''
                  : 'url(#dropshadow)',
            }}
          >
            <tspan className="font-extrabold lg:text-9xl sm:text-5xl text-4xl">
              NEWS{" "}
            </tspan>
            <tspan className="font-bold lg:text-7xl sm:text-4xl text-2xl ">
              of The Month
            </tspan>
          </text>
        </svg>

        <div className="w-full max-w-[2000px] mx-auto relative z-99">
          <Sliders />
        </div>

        <div className="absolute sm:bottom-0 bottom-30 z-10">
          <img src={blueLine} alt="" className="w-[9999px]" />
        </div>
      </div>

      <div className="min-h-screen relative w-full">
        <div className="w-full bg-[#FEFEFE] flex items-center border-t-[3.5px] border-b-[3.5px] z-9">
          <LogoMarquee />
        </div>

        <Service
          title="Service"
          subtitle1="Integrated System Advo"
          subtitle2="Ruang Aman"
        />
      </div>
    </div>
  );
}

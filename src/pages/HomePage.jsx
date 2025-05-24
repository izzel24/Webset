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
            <span className="font-Bricolage lg:text-8xl md:text-5xl text-2xl text-white z-99 text-center">
              Welcome to <span className="font-extrabold">BEM FIA UB 2025</span>
            </span>
          </div>
          <h1 className="font-Bricolage lg:text-6xl md:text-3xl text-xl text-white z-99">
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
            fill="#334075"
            textAnchor="middle"
            paintOrder="stroke"
            filter="url(#dropshadow)"
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
                  },
                  {
                    title: "MaFIA Business Summit (MBS)",
                    body: "Biro Ekonomi Kreatif",
                    color: "#FDC2D6",
                  },
                  {
                    title: "MaFIA Industry Insight (Minsight)",
                    body: "Kementerian Dalam & Luar Negeri",
                    color: "#FDC2D6",
                  },
                ]}
              />
              <CardsPortrait
                cards={[
                  {
                    title: "MaFIA Talent Project (Mata Project)",
                    body: "Kementerian Pemberdayaan Mahasiswa",
                    color: "#F0BD51",
                  },
                  {
                    title: "MaFIA Efficiency Boost (MaFEst)",
                    body: "Satuan Pendayagunaan Aparatur & Reformasi Organisasi",
                    color: "#F0BD51",
                  },
                  {
                    title: "MaFIA Research Innovation Forum (Marinovation)",
                    body: "Kementerian Riset & Inovasi Karya",
                    color: "#F0BD51",
                  },
                ]}
              />
              <CardsPortrait
                cards={[
                  {
                    title: "MaFIA Social Impact (Masimpact)",
                    body: "Kementerian Sosial Masyarakat",
                    color: "#98A869",
                  },
                  {
                    title: "MaFIA Institute",
                    body: "Kementerian Kajian & Aksi Strategis",
                    color: "#98A869",
                  },
                  {
                    title: "MaFIA Grow Fest (G-Fest)",
                    body: "Kementerian Pemberdayaan Mahasiswa",
                    color: "#98A869",
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
      <div className="min-h-screen relative flex flex-col justify-center items-center gap-10">
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
            filter="url(#dropshadow)"
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

        <div className="w-full flex justify-center items-center sm:relative absolute lg:top-0 bottom-[45px]">
          <svg
            viewBox="0 0 135 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-50 sm:w-[130px] sm:h-[250px]  h-36  "
          >
            <g filter="url(#filter0_d_259_50)">
              <rect x="27" y="68" width="4" height="189" fill="#98A869" />
              <rect x="99" y="68" width="4" height="189" fill="#98A869" />
              <rect
                x="27"
                y="75.4805"
                width="4"
                height="189"
                transform="rotate(-21.7685 27 75.4805)"
                fill="#98A869"
              />
              <rect
                width="4"
                height="189"
                transform="matrix(-0.92869 -0.370858 -0.370858 0.92869 100.807 75.4805)"
                fill="#98A869"
              />
              <path
                d="M64.5 4C96.8087 4 123 30.1913 123 62.5C123 94.8087 96.8087 121 64.5 121C32.1913 121 6 94.8087 6 62.5C6 30.1913 32.1913 4 64.5 4ZM64.5 50C57.5964 50 52 55.5964 52 62.5C52 69.4036 57.5964 75 64.5 75C71.4036 75 77 69.4036 77 62.5C77 55.5964 71.4036 50 64.5 50Z"
                fill="#F0BD51"
              />
              <path
                d="M64.5 205C96.8087 205 123 231.191 123 263.5C123 295.809 96.8087 322 64.5 322C32.1913 322 6 295.809 6 263.5C6 231.191 32.1913 205 64.5 205ZM64.5 251C57.5964 251 52 256.596 52 263.5C52 270.404 57.5964 276 64.5 276C71.4036 276 77 270.404 77 263.5C77 256.596 71.4036 251 64.5 251Z"
                fill="#F0BD51"
              />
              <circle
                cx="64.5"
                cy="62.5"
                r="16.5"
                stroke="#665E5E"
                stroke-width="8"
              />
              <circle
                cx="64.5"
                cy="263.5"
                r="16.5"
                stroke="#665E5E"
                stroke-width="8"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_259_50"
                x="0.5"
                y="0.5"
                width="134"
                height="335"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3" dy="5" />
                <feGaussianBlur stdDeviation="4.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_259_50"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_259_50"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

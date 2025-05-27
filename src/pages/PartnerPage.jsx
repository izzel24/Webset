import React, { useEffect, useState } from "react";
import oyi from "../assets/oyi.jpg";
import kofuku from "../assets/kofuku.png";
import selfroom from "../assets/selfroom.png";
import k70 from "../assets/k70.png";
import esize from "../assets/logo2.svg";
import athome from "../assets/athomespace.png";
import vessewing from "../assets/vessewing.png";
import htsin from "../assets/logo1.svg";
import girlup from "../assets/girl up.png";
import kmk from "../assets/kmkFia.png";
import pmk from "../assets/pmk.jpg";
import fkaub from "../assets/fkaub.jpg";
import forkim from "../assets/forkim.jpg";
import totus from "../assets/IMG_1758 1.png";
import uaki from "../assets/UAKI.png";
import unikahidha from "../assets/unikahidha.png";
import gece from "../assets/gece_barbershop.jpg";
import komu from "../assets/komu.space.jpg";
import shoesandcare from "../assets/shoesandcare.png";
import ksm from "../assets/ksm.jpg";
import kopisisilain from "../assets/kopisisilain.jpg";
import anasera from "../assets/anasera.jpg";
import jolotundo from "../assets/jolotundo.jpg";
import logo1 from "../assets/LOGO DPM.png";
import logo2 from "../assets/LOGO HUMANISTIK.PNG";
import logo3 from "../assets/Logo Himabis.png";
import logo4 from "../assets/LOGO HIMAPAJAK.png";
import logo5 from "../assets/LOGO HIMAPAR.jpg";
import logo6 from "../assets/LOGO HIMADIKA.png";
import logo7 from "../assets/Logo HMPIP.png";
import logo8 from "../assets/Logo MAFIOSO.PNG";
import logo9 from "../assets/LOGO SEC.png";
import logo10 from "../assets/forkim.jpg";
import logo11 from "../assets/LOGO ADMINISTRATIO CHOIR.png";
import logo12 from "../assets/LOGO DIANNS.png";
import logo13 from "../assets/LOGO SSM.PNG";
import logo14 from "../assets/Logo RSC HP.png";
import logo15 from "../assets/LOGO AEC.png";
import logo16 from "../assets/logo amc.png";
import { Link } from "react-router-dom";

export default function PartnerPage() {
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
    <div className="min-h-screen overflow-hidden">
      <div className="min-h-screen relative">
        {/* <img src={green} alt="" className='absolute h-full w-full sm:flex hidden'/> */}
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
              Meet Our Partners
            </tspan>
          </text>
        </svg>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1077"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="absolute top-0 sm:hidden scale-150 "
        >
          <path
            d="M-664 237.536C-582.676 265.94 -505.586 292.575 -415.531 310.502C-276.748 338.128 -106.218 374.496 42.5592 359.962C154.564 349.02 234.965 299.728 309.643 252.717C409.38 189.932 502.933 118.564 626.098 71.5272C759.848 20.448 905.929 31.3584 1005.68 104.827C1140.22 216.02 1074.14 348.895 1032.08 400.682C946.625 505.926 772.875 579.874 744.262 700.794C714.972 824.578 761.749 1006.76 1016.2 1026.45C1161.25 1037.67 1325.14 998.373 1460.53 974.048C1600.23 948.951 1756.06 904.207 1905.67 908.918C2167.65 917.166 2393.12 1026.17 2592 1119"
            stroke="#98A869"
            stroke-width="80"
            stroke-linecap="square"
          />
        </svg>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1078"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute sm:block hidden"
        >
          <path
            d="M-230 244.075C-148.69 177.534 -41.4807 129.938 54.2226 90.3081C140.617 54.533 235.861 31.5333 329.162 51.2431C586.239 105.551 765.015 326.656 913.443 527.781C996.079 639.755 1071.54 767.638 1177.19 859.417C1294.61 961.423 1450.52 1023.18 1604.75 1033.13C1928.04 1054 2135.79 694.037 2242 433.581"
            stroke="#98A869"
            stroke-width="87"
            stroke-linecap="square"
          />
        </svg>

        <div className="flex flex-col xl:gap-20 md:gap-14 gap-10 relative z-99 md:p-5 p-2">
          <div className="grid grid-cols-4 justify-items-center items-center">
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${oyi})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${kofuku})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${selfroom})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${k70})` }}
            ></div>
          </div>
          <div className="grid grid-cols-4 justify-items-center items-center">
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${esize})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${athome})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${vessewing})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${htsin})` }}
            ></div>
          </div>
          <div className="grid grid-cols-4 justify-items-center items-center">
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${gece})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${komu})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${shoesandcare})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${ksm})` }}
            ></div>
          </div>
          <div className="grid grid-cols-4 justify-items-center items-center relative">
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${kopisisilain})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${anasera})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-white  bg-size-[80%] bg-no-repeat bg-center dropShadow"
              style={{ backgroundImage: `url(${jolotundo})` }}
            ></div>
            {/* <div className='rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow' style={{backgroundImage: `url(${ksm})`}}></div> */}
          </div>
        </div>
      </div>
      <div className="h-screen relative">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1077"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="absolute sm:block hidden"
        >
          <path
            d="M-664 237.536C-582.676 265.94 -505.586 292.575 -415.531 310.502C-276.748 338.128 -106.218 374.496 42.5592 359.962C154.564 349.02 234.965 299.728 309.643 252.717C409.38 189.932 502.933 118.564 626.098 71.5272C759.848 20.448 905.929 31.3584 1005.68 104.827C1140.22 216.02 1074.14 348.895 1032.08 400.682C946.625 505.926 772.875 579.874 744.262 700.794C714.972 824.578 761.749 1006.76 1016.2 1026.45C1161.25 1037.67 1325.14 998.373 1460.53 974.048C1600.23 948.951 1756.06 904.207 1905.67 908.918C2167.65 917.166 2393.12 1026.17 2592 1119"
            stroke="#98A869"
            stroke-width="80"
            stroke-linecap="square"
          />
        </svg>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1078"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute scale-200 sm:hidden"
        >
          <path
            d="M-104 244.075C-34.3008 177.534 57.5989 129.938 139.636 90.3081C213.693 54.533 295.337 31.5333 375.314 51.2431C595.68 105.551 748.928 326.656 876.16 527.781C946.996 639.755 1011.68 767.638 1102.24 859.417C1202.9 961.423 1336.55 1023.18 1468.75 1033.13C1745.88 1054 1923.96 694.037 2015 433.581"
            stroke="#98A869"
            stroke-width="87"
            stroke-linecap="square"
          />
        </svg>

        <div className="flex flex-col h-full justify-center md:gap-20 gap-20 relative z-99 md:p-5 p-2">
          <div className="grid grid-cols-4 justify-items-center items-center">
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${fkaub})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${forkim})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${girlup})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${kmk})` }}
            ></div>
          </div>
          <div className="grid grid-cols-4 justify-items-center items-center">
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${pmk})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${totus})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${uaki})` }}
            ></div>
            <div
              className="rounded-full xl:h-[120px] xl:w-[120px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]  bg-cover dropShadow"
              style={{ backgroundImage: `url(${unikahidha})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen relative pt-[110px]" id="partnership">
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

        <div className="min-h-screen md:h-[5500px] relative bg-[#98A869] py-40">
          <div>
            <svg width="100%" className="relative z-99 md:h-[100px] h-[60px]">
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
                  Let’s Explore FIA UB
                </tspan>
              </text>
            </svg>
            <svg width="100%" className="relative z-99 md:h-[100px] h-[60px] ">
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
                  Organization!
                </tspan>
              </text>
            </svg>
          </div>
          <div className="relative h-full">
            <div className="absolute md:top-[10%] top-[7%] left-[50%] -translate-x-[50%] flex flex-col justify-center md:gap-28 gap-20 items-center z-10">
              <Link to={"/partner/dpm"}
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[70%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo1})` }}
              />
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo2})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo3})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo4})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo5})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo6})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-center bg-size-[85%] bg-no-repeat"
                style={{ backgroundImage: `url(${logo7})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[85%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo8})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[70%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo9})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo10})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[70%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo11})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[70%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo12})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[70%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo13})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[70%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo14})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-size-[80%] bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${logo15})` }}
              ></div>
              <div
                className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo16})` }}
              ></div>
            </div>

            {/* <div className='h-[20%]  border-r-[50px] border-t-[50px] absolute left-0 top-0 w-[50%] border-[#334075] rounded-tr-full'></div>
                <div className='absolute w-[50%] h-[60%] left-0 top-[20%] border-r-[50px] border-[#334075]'/>
                <div className='absolute w-[50%] h-[20%] shadow-[-20px_30px_0_30px_#334075] right-0 rounded-bl-full bottom-0'></div> */}

            <svg
              width="100%"
              height="5172"
              viewBox="0 0 1280 5172"
              className="md:h-[5172px] h-[3500px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio={preserveAspectRatio}
            >
              <path
                d="M-673 168.687C-673 168.687 635.533 -275.505 635.533 455.465C635.533 1186.43 635.533 3475.24 635.533 4825.91C836.505 5380.09 2327 5024.93 2327 5024.93"
                stroke="#334075"
                stroke-width="50"
              />
            </svg>
          </div>
        </div>

        {/* <svg width="100%" height="200" viewBox="0 0 1920 116" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0'>
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
            </svg> */}
      </div>
    </div>
  );
}

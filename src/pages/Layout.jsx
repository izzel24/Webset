import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout() {

  return (
    <>
        <Navbar />
        <div className='relative'>
          <Outlet />

    <div className='mt-auto'>

   
        <div className="w-full flex justify-center items-center sm:relative relative lg:top-0 bottom-[45px]">
          <svg
            viewBox="0 0 135 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-50 sm:w-[130px] sm:h-[250px] h-36 "
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
        <svg
          height="399"
          viewBox="0 0 1920 399"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full absolute sm:bottom-[100px] bottom-[95px] "
        >
          <path
            d="M1920 399H0V0C0.00146804 134.058 429.808 242.733 960 242.733C1490.19 242.733 1920 134.058 1920 0V399Z"
            fill="#1E1D1D"
          />
        </svg>
         <Footer />
          </div>
      </div>
     
    </>
  )
}

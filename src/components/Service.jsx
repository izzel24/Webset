
import React, { useEffect, useRef } from 'react'
import pinkBottom from "../assets/pinkLinBottom.svg"

import "../service.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Service({ title, subtitle1, subtitle2 }) {

    const subtitle1Ref = useRef();
    const subtitle2Ref = useRef();

    useEffect(() => {
      // Subtitle 1 aktif: warna kuning saat spacer1
      gsap.to(subtitle1Ref.current,  {
        fill: '#F0BD51',
        scrollTrigger: {
          trigger: '.spacer1',
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
        },
      });
  

      gsap.to(subtitle1Ref.current, {
        fill: '#ffffff',
        scrollTrigger: {
          trigger: '.spacer2',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
  

      gsap.to(subtitle2Ref.current, {
        fill: '#F0BD51',
        scrollTrigger: {
          trigger: '.spacer2',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
    }, []);

  return (
    <div className='min-h-screen relative bg-[#98A869] '>

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center">
        <div className='relative z-99 flex w-full flex-col justify-center items-center px-2'>
          {/* <h2 className="font-Bricolage md:text-[200px] text-7xl text-white font-extrabold relative">{title}</h2> */}
           <svg width="100%" className='lg:h-[140px] md:h-[118px] sm:h-[94px] h-[82px]'>
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              ref={subtitle1Ref}
              x="50%"
              y="50%"
              // fontSize="150"
              dominantBaseline="middle"
              className="font-Bricolage font-extrabold lg:text-9xl md:text-8xl sm:text-7xl text-6xl "
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow)"
              >
                {title}
              </text>
          </svg>

          {/* <p ref={subtitle1Ref} className="md:text-6xl text-4xl text-white text-center font-Britania text-stroke-3 font-bold relative">{subtitle1}</p> */}
          <svg width="100%" height="50">
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              ref={subtitle1Ref}
              x="50%"
              y="50%"
              // fontSize="40"
              dominantBaseline="middle"
              className="font-Britania lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow)"
              >
                {subtitle1}
              </text>
          </svg>
          {/* <p ref={subtitle2Ref} className="md:text-6xl text-4xl text-white text-center  font-Britania text-stroke-5 font-bold">{subtitle2}</p> */}
          <svg   width="100%" className='lg:h-[50px] md:h-[38px] sm:h-[32px] h-[26px]'>
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>
            <rect></rect>

            <text
              ref={subtitle2Ref}
              x="50%"
              y="50%"
              // fontSize="40"
              dominantBaseline="middle"
              className="font-Britania lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              paintOrder="stroke"
              textAnchor='middle'
              filter="url(#dropshadow)"
              >
                {subtitle2}
              </text>
          </svg>
        </div>
        
        <img src={pinkBottom} alt="" className="absolute bottom-0 w-full z-10" />
      </div>
      

      <div className="spacer1 h-screen bg-transparent relative"></div>
      <div className="spacer2 h-screen bg-transparent relative"></div>
    </div>
  )
}

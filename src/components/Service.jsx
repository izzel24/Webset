
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
      gsap.to(subtitle1Ref.current, {
        color: '#F0BD51',
        scrollTrigger: {
          trigger: '.spacer1',
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
        },
      });
  

      gsap.to(subtitle1Ref.current, {
        color: '#ffffff',
        scrollTrigger: {
          trigger: '.spacer2',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
  

      gsap.to(subtitle2Ref.current, {
        color: '#F0BD51',
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
          <h2 className="font-Bricolage md:text-[200px] text-7xl text-white font-extrabold text-stroke-2 relative">{title}</h2>
          <p ref={subtitle1Ref} className="md:text-6xl text-4xl text-white text-center font-Britania text-stroke-5 font-bold relative">{subtitle1}</p>
          <p ref={subtitle2Ref} className="md:text-6xl text-4xl text-white text-center  font-Britania text-stroke-5 font-bold">{subtitle2}</p>
        </div>
        
        <img src={pinkBottom} alt="" className="absolute bottom-0 w-full z-10" />
      </div>
      

      <div className="spacer1 h-screen bg-transparent relative"></div>
      <div className="spacer2 h-screen bg-transparent relative"></div>
    </div>
  )
}

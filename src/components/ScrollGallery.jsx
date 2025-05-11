import React, { useEffect, useRef } from 'react'
import pinkBottom from "../assets/pinkLinBottom.svg"
import img1 from "../assets/filosofi.png" // Ganti dengan path gambar pertama
import img2 from "../assets/DKV.png" // Ganti dengan path gambar kedua

import "../service.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Service({ title, subtitle1, subtitle2 }) {

    const subtitle1Ref = useRef();
    const subtitle2Ref = useRef();
    const img1Ref = useRef();
    const img2Ref = useRef();

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

      // Animasi gambar muncul saat scroll dengan efek sticky dan spring
      gsap.to(img1Ref.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "bounce.out",  // Efek spring
        scrollTrigger: {
          trigger: '.spacer1',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });

      gsap.to(img2Ref.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "bounce.out",  // Efek spring
        scrollTrigger: {
          trigger: '.spacer2',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
    }, []);

  return (
    <div className='min-h-screen relative '>

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center">
        <div className='relative z-99 flex w-full flex-col justify-center items-center'>
          <h2 className="font-Bricolage md:text-[200px] text-7xl text-white font-extrabold text-stroke-3 relative">{title}</h2>
          <p ref={subtitle1Ref} className="md:text-6xl text-4xl text-white text-center font-Britania text-stroke-5 font-bold relative">{subtitle1}</p>
          <p ref={subtitle2Ref} className="md:text-6xl text-4xl text-white text-center  font-Britania text-stroke-5 font-bold">{subtitle2}</p>
        </div>
      </div>

      {/* Spacer1 */}
      <div className="spacer1 h-screen bg-transparent relative">
        <img 
          ref={img1Ref} 
          src={img1} 
          alt="Image 1" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 transition-all duration-1000"
        />
      </div>
      
      {/* Spacer2 */}
      <div className="spacer2 h-screen bg-transparent relative">
        <img 
          ref={img2Ref} 
          src={img2} 
          alt="Image 2" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 transition-all duration-1000"
        />
      </div>
    </div>
  )
}

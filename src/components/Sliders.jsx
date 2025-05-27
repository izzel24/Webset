import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import bg1 from '../assets/unlock.jpg'
import bg2 from '../assets/lpj.png'
import bg3 from '../assets/boost.jpg'
import bg4 from '../assets/connnect 2.png'
import bg5 from '../assets/bg5.png'
import bg6 from '../assets/Mafia in Action.jpg'
import "../index.css";

export default function Sliders() {
  const swiperRef = useRef(null);

  return (
    <div className="triple-slider-container flex justify-center">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3.5}
        spaceBetween={0}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(0)}
          className='border-3 bg-cover bg-center'
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-white text-center font-Bricolage font-bold lg:text-4xl md:text-3xl text-2xl'>
              Unlocking Sekben Connection
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(1)}
          className='border-3 bg-cover bg-center'
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-black text-center font-Bricolage font-bold text-4xl'>
              Laporan 100 Hari Kerja
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(2)}
          className='border-3 bg-cover bg-bottom'
          style={{ backgroundImage: `url(${bg3})` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-white text-center font-Bricolage font-bold lg:text-4xl md:text-3xl text-2xl'>
              BoostCamp BEM FIA UB 2025
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(3)}
          className='border-3 bg-cover bg-center'
          style={{ backgroundImage: `url(${bg4})` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-white text-center font-Bricolage font-bold lg:text-4xl md:text-3xl text-2xl'>
              BEM Connect
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(4)}
          className='border-3 bg-cover bg-center'
          style={{ backgroundImage: `url(${bg5})` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-white text-center font-Bricolage font-bold lg:text-4xl md:text-3xl text-2xl'>
              Kemenag On The Spot
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(5)}
          className='border-3 bg-cover bg-center'
          style={{ backgroundImage: `url(${bg6})` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-white text-center font-Bricolage font-bold lg:text-4xl md:text-3xl text-2xl'>
              Mafia In Action
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "../index.css";

export default function Sliders() {
  return (
    <div className="triple-slider-container flex justify-center">
    <Swiper
      slidesPerView={2}
      spaceBetween={60}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
      }}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='border-3'>
        <div className="slide"></div>
      </SwiperSlide>
      <SwiperSlide className='border-3'>
        <div className="slide"></div>
      </SwiperSlide>
      <SwiperSlide className='border-3'>
        <div className="slide"></div>
      </SwiperSlide>
      <SwiperSlide className='border-3'>
        <div className="slide"></div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="slide">Slide 5</div>
      </SwiperSlide> */}
    </Swiper>
  </div>
  )
}

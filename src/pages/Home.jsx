import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "../index.css";

export default function Home() {
  return (
    <div className="triple-slider-container flex justify-center">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide ">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">Slide 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">Slide 5</div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
}

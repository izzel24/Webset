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
          style={{ backgroundImage: `url(https://img.notionusercontent.com/s3/prod-files-secure%2F669ec9ba-6e98-4f69-b80a-8fb7356d4d73%2Fb3a30b85-4350-4dd7-9430-9ae1bb04419f%2Funlock.jpg/size/w=1420?exp=1748591799&sig=8J2Bc5m2vs7jPa0yHY1DOpHOB2cXPmbBLkXBDnTw_jA&id=1feb5b93-f3fa-8062-b176-d46175837aac&table=block)` }}
        >
          <div className="slide flex justify-center !w-full !h-full items-center">
            <h1 className='text-white text-center font-Bricolage font-bold lg:text-4xl md:text-3xl text-2xl'>
              Unlocking Sekben Connection
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef.current?.slideToLoop(1)}
          className='border-3 bg-cover bg-position-[50%_30%] bg-no-repeat'
          style={{ backgroundImage: `url(https://img.notionusercontent.com/s3/prod-files-secure%2F669ec9ba-6e98-4f69-b80a-8fb7356d4d73%2F23dd2771-fcf7-420b-9366-656eb67e4fa2%2Flpj.png/size/w=670?exp=1748592006&sig=Z1w6VDMdkjygh2k21lhJWtrvWjrabWHCaAl6zcM7A-0&id=1feb5b93-f3fa-8007-83a0-df21fe8e6fbc&table=block)` }}
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
          style={{ backgroundImage: `url(https://img.notionusercontent.com/s3/prod-files-secure%2F669ec9ba-6e98-4f69-b80a-8fb7356d4d73%2Fe3b08519-92d1-4329-9e6c-9d7fdec92c19%2Fboost.jpg/size/w=1420?exp=1748592585&sig=wpi0kMZKrhaP_m-lwM0EVdaP_Fc0Sru6Wgt_0IoMtis&id=1feb5b93-f3fa-8072-8e97-fd2e9c26e7f0&table=blocka)` }}
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
          style={{ backgroundImage: `url(https://img.notionusercontent.com/s3/prod-files-secure%2F669ec9ba-6e98-4f69-b80a-8fb7356d4d73%2F0924ddd6-546e-43b8-81ab-813445929d29%2Fconnnect_2.png/size/w=1420?exp=1748592778&sig=IZLwn7cBIhesEbeKpGNS7BN-4OtcBPB9vFeedtM8ckc&id=200b5b93-f3fa-80ec-b6de-f64cba033fba&table=block)` }}
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
          style={{ backgroundImage: "url('https://img.notionusercontent.com/s3/prod-files-secure%2F669ec9ba-6e98-4f69-b80a-8fb7356d4d73%2F7161b40e-13b7-4a38-8a8b-ffe24d12b0d4%2FIMG_4683_1_(1).png/size/w=1420?exp=1748592852&sig=I6C62rYiLws215FxawKA-l_0_DMpcG3AJLIQlTjbtc4&id=200b5b93-f3fa-8040-ae4d-fae1e7cd7f67&table=block')" }}
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
          style={{ backgroundImage: `url(https://img.notionusercontent.com/s3/prod-files-secure%2F669ec9ba-6e98-4f69-b80a-8fb7356d4d73%2Fab76be7d-84a3-4ecd-abb7-81e5d17bdc18%2FMafia_in_Action.jpg/size/w=1420?exp=1748593130&sig=3vyXDYIx-3JRoepZzAploHCqeHZ6hk4GHhm2fXamM8Y&id=200b5b93-f3fa-80c8-90b3-fa30315afcbe&table=block)` }}
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

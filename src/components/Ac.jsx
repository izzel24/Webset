import React from "react";
import ac from "../assets/LOGO ADMINISTRATIO CHOIR.png";

export default function Ac() {
  return (
    <div className="w-full flex">
      <div
        className="absolute lg:w-48 lg:h-48 md:w-36 md:h-36 w-20 h-20 rounded-full bg-white bg-center bg-size-[70%] bg-no-repeat top-[25%] md:left-[35%] left-[50%] lg:-translate-x-[70px] md:-translate-x-16 -translate-x-[157px]"
        style={{ backgroundImage: `url(${ac})` }}
      ></div>
      <div className="flex flex-col lg:gap-10 gap-2 lg:p-10 px-4 absolute top-[25%] lg:left-[42%] md:left-[45%] sm:left-[40%] left-[30%]">
        <h1 className="font-Bricolage text-[#334075] font-extrabold lg:text-6xl md:text-4xl text-3xl">
          AC
        </h1>
        <p className="lg:w-[55%] font-Bricolage font-medium lg:text-xl md:text-lg text-xs text-[#334075]">
          Administratio Choir is a Choir Student Activity Unit (UKM) under the
          Faculty of Administrative Sciences at Universitas Brawijaya. It serves
          as a platform for students interested in singing, aiming to enhance
          their vocal skills while promoting togetherness and achievement in
          choral music. Since its creation, the choir has participated in many
          academic and non-academic events, including competitions at various
          levels. The choir regularly engages in training, workshops, and
          collaborations with experienced musicians. It also fosters teamwork
          and camaraderie among its diverse members and strives to maintain high
          musical quality and innovative performances.
        </p>
        <div>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            Instagram:{" "}
            <a href="https://www.instagram.com/administratiochoir/" target="_blank">
              <u>@administratiochoir</u>
            </a>
          </p>
          <p className="font-Bricolage font-medium md:text-xl text-sm text-[#334075]">
            WA : 085695158749 (Vio)
          </p>
        </div>
      </div>
    </div>
  );
}

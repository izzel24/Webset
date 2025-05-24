import React from "react";
import { HashLink } from "react-router-hash-link";

const BoxWithSVG = ({
  bgColor,
  svgPath,
  viewBox,
  svgClass,
  fillColor,
  title,
  id,
}) => (
  <div
    className={`bg-[${bgColor}] xl:w-[350px] xl:h-[350px] lg:w-[280px] lg:h-[280px]  md:w-[275px] md:h-[275px] w-[250px] h-[250px] rounded-[42px] relative flex overflow-hidden items-center justify-center`}
  >
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${svgClass}`}
    >
      <path d={svgPath} fill={fillColor} />
    </svg>
    <div className="flex justify-center w-full items-center p-5">
      <h2 className="relative z-99 font-Britania text-3xl text-center">
        {title}
      </h2>
    </div>
  </div>
);

export default function ProgramKerja() {
  const boxes = [
    {
      bgColor: "#FDC2D6",
      viewBox: "0 0 212 385",
      svgClass: "w-36 bottom-0 left-0",
      svgPath:
        "M55.1034 6.329L0 61.2056V330.009C3.78573 366.122 29.5 386.009 63.5 384.009H146.418C143.5 367.863 139.41 360.668 129.099 350.115L70.8473 287.168H168.459C239.306 246.818 212.155 179.858 168.459 164.503H70.8473L133.823 98.3279C168.459 14.3995 93.7712 -14.0497 55.1034 6.329Z",
      fillColor: "#F0BD51",
      title: "MaFIA Inclusive Bootcamp (Massive Camp)",
      id:"MaFIA-Inclusive-Bootcamp"
    },
    {
      bgColor: "#F0BD51",
      viewBox: "0 0 368 225",
      svgClass: "w-56 top-0 right-0",
      svgPath:
        "M53.28 0.00937529L8.51989 55.1604C-14.5649 95.0925 8.52037 187.189 86.85 140.394L141.402 76.8865V177.161C154.528 222.149 214.137 257.381 247.707 177.161V76.8865L309.252 145.407C337.638 157.869 349.588 154.348 368 140.394V59.0094C368 13.5094 333.272 -0.415395 309.5 0.00937529H53.28Z",
      fillColor: "#98A869",
      title: "MaFIA Talent Project (Mata Project)",
      id:"MaFIA-Talent-Project"
    },
    {
      bgColor: "#98A869",
      viewBox: "0 0 286 409",
      svgClass: "w-44 right-0 bottom-0",
      svgPath:
        "M62.1808 408.975C84.8937 375.76 99.979 358.586 132.778 331.582H39.6497C-3.72113 305.137 -21.9334 245.083 39.6497 211.698H129.776L72.6973 150.997C45.9196 109.555 69.6932 49.3225 138.789 61.4629L213.892 129.751V38.6998C228.317 5.78689 241.84 -5.26788 285.992 2.27934V348.014C286.527 390.749 260.338 409.935 227.558 408.975H62.1808Z",
      fillColor: "#FDC2D6",
      title: "MaFIA Social Impact (Masimpact)",
      id:"MaFIA-Social-Impact"
    },
    {
      bgColor: "#98A869",
      viewBox: "0 0 212 385",
      svgClass: "w-36 bottom-0 left-0",
      svgPath:
        "M55.1034 6.329L0 61.2056V330.009C3.78573 366.122 29.5 386.009 63.5 384.009H146.418C143.5 367.863 139.41 360.668 129.099 350.115L70.8473 287.168H168.459C239.306 246.818 212.155 179.858 168.459 164.503H70.8473L133.823 98.3279C168.459 14.3995 93.7712 -14.0497 55.1034 6.329Z",
      fillColor: "#F0BD51",
      title: "MaFIA Bussines Submit (MBS)",
      id:"MaFIA-Bussines-Submit"
    },
    {
      bgColor: "#FDC2D6",
      viewBox: "0 0 368 225",
      svgClass: "w-56 top-0 right-0",
      svgPath:
        "M53.28 0.00937529L8.51989 55.1604C-14.5649 95.0925 8.52037 187.189 86.85 140.394L141.402 76.8865V177.161C154.528 222.149 214.137 257.381 247.707 177.161V76.8865L309.252 145.407C337.638 157.869 349.588 154.348 368 140.394V59.0094C368 13.5094 333.272 -0.415395 309.5 0.00937529H53.28Z",
      fillColor: "#F0BD51",
      title: "MaFIA Efficiency Boost (MaFEst)",
      id:"MaFIA-Efficiency-Boost"
    },
    {
      bgColor: "#F0BD51",
      viewBox: "0 0 286 409",
      svgClass: "w-44 right-0 bottom-0",
      svgPath:
        "M62.1808 408.975C84.8937 375.76 99.979 358.586 132.778 331.582H39.6497C-3.72113 305.137 -21.9334 245.083 39.6497 211.698H129.776L72.6973 150.997C45.9196 109.555 69.6932 49.3225 138.789 61.4629L213.892 129.751V38.6998C228.317 5.78689 241.84 -5.26788 285.992 2.27934V348.014C286.527 390.749 260.338 409.935 227.558 408.975H62.1808Z",
      fillColor: "#98A869",
      title: "MaFIA Institute",
      id:"MaFIA-Institute"
    },
    {
      bgColor: "#F0BD51",
      viewBox: "0 0 212 385",
      svgClass: "w-36 bottom-0 left-0",
      svgPath:
        "M55.1034 6.329L0 61.2056V330.009C3.78573 366.122 29.5 386.009 63.5 384.009H146.418C143.5 367.863 139.41 360.668 129.099 350.115L70.8473 287.168H168.459C239.306 246.818 212.155 179.858 168.459 164.503H70.8473L133.823 98.3279C168.459 14.3995 93.7712 -14.0497 55.1034 6.329Z",
      fillColor: "#98A869",
      title: "MaFIA Industry Insight (Minsight)",
      id:"MaFIA-Industry-Insight"
    },
    {
      bgColor: "#98A869",
      viewBox: "0 0 368 225",
      svgClass: "w-56 top-0 right-0",
      svgPath:
        "M53.28 0.00937529L8.51989 55.1604C-14.5649 95.0925 8.52037 187.189 86.85 140.394L141.402 76.8865V177.161C154.528 222.149 214.137 257.381 247.707 177.161V76.8865L309.252 145.407C337.638 157.869 349.588 154.348 368 140.394V59.0094C368 13.5094 333.272 -0.415395 309.5 0.00937529H53.28Z",
      fillColor: "#FDC2D6",
      title: "MaFIA Research n Innovation Forum (Marinovation)",
      id:"MaFIA-Research-n-Innovation Forum"
    },
    {
      bgColor: "#FDC2D6",
      viewBox: "0 0 286 409",
      svgClass: "w-44 right-0 bottom-0",
      svgPath:
        "M62.1808 408.975C84.8937 375.76 99.979 358.586 132.778 331.582H39.6497C-3.72113 305.137 -21.9334 245.083 39.6497 211.698H129.776L72.6973 150.997C45.9196 109.555 69.6932 49.3225 138.789 61.4629L213.892 129.751V38.6998C228.317 5.78689 241.84 -5.26788 285.992 2.27934V348.014C286.527 390.749 260.338 409.935 227.558 408.975H62.1808Z",
      fillColor: "#F0BD51",
      title: "MaFIA Grow Fest (G-fest) ",
      id:"MaFIA-Grow-Fest"
    },
  ];

  return (
    <div className="min-h-screen flex justify-center p-20 mb-84">
      <div className="h-full w-full flex flex-col justify-center items-center gap-5">
        <h1 className="bg-gradient-to-r from-[#334075] to-[#5F78DB] inline-block text-transparent bg-clip-text font-Bricolage font-extrabold xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center">
          Program Kerja Unggulan
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full justify-items-center items-center cursor-pointer" >
          {boxes.map((box, index) => (
            <HashLink to={`/program-kerja#${box.id}`}>
              <BoxWithSVG key={index} {...box} />
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
}

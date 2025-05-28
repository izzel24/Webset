import pinkBottom from "../assets/pinkLinBottom.svg"
import "../service.css"

export default function Service({ title, subtitle1, subtitle2 }) {

  return (
    <div className='min-h-[200vh] relative bg-[#98A869] '>

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center">
        <div className='relative z-99 flex w-full flex-col justify-center items-center px-2'>
          <svg width="100%" className='lg:h-[140px] md:h-[118px] sm:h-[100px] h-[100px]'>
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              className="font-Bricolage font-extrabold lg:text-9xl md:text-8xl sm:text-7xl text-6xl "
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow)"
              >
                <tspan>{title}</tspan>
              </text>
          </svg>
          <svg width="100%" height={"60"} className='md:h-[60px] h-35px relative z-99'>
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              className="font-Britania lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              textAnchor='middle'
              paintOrder="stroke"
              filter="url(#dropshadow)"
              >
                <a className='svg-hover cursor-pointer relative z-99' href='https://linktr.ee/AdvokesmaBEMFIAUB' target='_blank'>{subtitle1}</a>
              </text>
          </svg>
          <svg   width="100%" className='md:h-[60px] h-[35px] relative z-99'>
            <defs>
              <filter id="dropshadow">
                <feDropShadow dx="2" dy="2.5" stdDeviation="0" flood-color="black" flood-opacity="1" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              className="font-Britania lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
              stroke="black"
              strokeWidth="4"
              fill="#ffffff"
              paintOrder="stroke"
              textAnchor='middle'
              filter="url(#dropshadow)"
              >
                <a className='svg-hover cursor-pointer' href='http://bit.ly/FormPengaduanRuangAman' target='_blank'>{subtitle2}</a>
              </text>
          </svg>
        </div>
        <img src={pinkBottom} alt="" className="absolute bottom-0 w-full will-change-transform z-0" />
      </div>
        
      

      {/* {/* <div className="spacer1 h-screen bg-transparent relative"></div> */}
      <div className="spacer2 h-screen bg-transparent relative z-50 pointer-events-none"></div>
    </div>
  )
}

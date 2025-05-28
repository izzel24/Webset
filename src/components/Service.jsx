import pinkBottom from "../assets/pinkLinBottom.svg"
import "../service.css"

export default function Service({ title, subtitle1, subtitle2 }) {

  return (
    <div className='h-[200vh] relative bg-[#98A869] z-[1]'>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className='relative z-[2] flex w-full h-full flex-col justify-center items-center px-2'>
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
          <svg width="100%" height={"60"} className='md:h-[60px] h-35px relative z-[2]'>
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
          <svg width="100%" className='md:h-[60px] h-[35px] relative z-[2]'>
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
        <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
          <img 
            src={pinkBottom} 
            alt="" 
            className="w-full object-cover transform-gpu will-change-transform" 
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />
        </div>
      </div>
      <div className="h-[100vh] bg-transparent"></div>
    </div>
  )
}

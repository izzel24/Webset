import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'

import AboutPage from '../pages/AboutPage'
import Sections from '../components/Sections'
import AboutUs from '../components/AboutUs'
import VisiMisi from '../components/VisiMisi'
import ArahanStrategis from '../components/ArahanStrategis'
import ServicePage from '../pages/ServicePage'
import ProgramKerja from '../pages/ProgramKerja'
import Proker from '../pages/Proker'
import ConnectUs from '../pages/ConnectUs'
import PeopleScrollShowcase from '../pages/PeopleScrollShowcase'
import Layout from '../pages/Layout'
import RouteTransitionWrapper from '../components/RouteTransitionWrapper'
import loadingf from '../assets/LOADING SCREEN HOMEPAGE (1).gif'
import PartnerPage from '../pages/PartnerPage'
import PartnerLayout from '../pages/PartnerLayout'
import DpmFIa from '../components/DpmFia'
import Humanistik from '../components/Humanistik'
import HimabisFIa from '../components/HimabisFIa'
import HimapajakFia from '../components/HimapajakFia'
import HimaparFia from '../components/HimaparFia'
import HimadikaFia from '../components/HimadikaFia'
import Hmpip from '../components/Hmpip'
import Mafioso from '../components/Mafioso'
import SEC from '../components/SEC'
import Forkim from '../components/Forkim'
import Ac from '../components/Ac'
import Dianns from '../components/Dianns'
import Ssm from '../components/Ssm'
import Rsc from '../components/Rsc'
import Aec from '../components/Aec'
import Amc from '../components/Amc'
import Notfound from '../pages/Notfound'

const HomePage = lazy(() => (import('../pages/HomePage')))

export default function AppRoutes() {

   const location = useLocation()
  const [showLoading, setShowLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [hasVisited, setHasVisited] = useState(false)
  const [gifKey, setGifKey] = useState(Date.now())
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

   useEffect(() => {
    const isFirstVisit = (location.pathname === '/' || location.pathname === '/home') && !hasVisited

    if (isFirstVisit) {
      setShowLoading(true)
       setFadeOut(false)
       setGifKey(Date.now())

      const timer = setTimeout(() => {

        setFadeOut(true)

        const fadeTimer = setTimeout(() => {
          setShowLoading(false)
          setHasVisited(true)
        }, 500)

        return () => clearTimeout(fadeTimer)
      }, 3750)

      return () => clearTimeout(timer)
    } else {
      setShowLoading(false)
    }
  }, [location.pathname, hasVisited])

      
   const gifUrl = isMobile
    ? "https://res.cloudinary.com/diofvdwig/image/upload/v1748509074/LOADING_SCREEN_HOMEPAGE_MOBILE_1_pt6kbu.gif"
    : "https://res.cloudinary.com/diofvdwig/image/upload/v1748504409/LOADING_SCREEN_HOMEPAGE_1_dt4fpe.gif";


  return (
    <>
    {showLoading && (
      <div
        className={`fixed w-full inset-0 bg-black z-[9999] flex justify-center items-center transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ transitionProperty: 'opacity' }}
      >
        <img src={`${gifUrl}?t=${gifKey}`} alt="Loading..." className="w-full h-full " />
      </div>
    )}

    <Suspense
      // fallback={
      //   <div className="h-screen bg-white flex justify-center items-center">
      //     <img src={loadingf} alt="Loading..." className="w-full fixed" />
      //   </div>
      // }
    >
      <RouteTransitionWrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<HomePage />} />

            <Route path="about" element={<AboutPage />}>
              <Route index element={<Sections />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="visi&misi" element={<VisiMisi />} />
              <Route path="arahan-strategis" element={<ArahanStrategis />} />
            </Route>

            <Route path="connect-with-us" element={<ConnectUs />} />
            <Route path="program" element={<ProgramKerja />} />
            <Route path="program-kerja" element={<Proker />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="people" element={<PeopleScrollShowcase />} />
            <Route path='partner' element={<PartnerPage />}></Route>
            <Route element={<PartnerLayout/>} >
              <Route path='partner/dpm' element={<DpmFIa/>} />
              <Route path='partner/humanistik' element={<Humanistik />} />
              <Route path='partner/himabis' element={<HimabisFIa />} />
              <Route path='partner/himapajak' element={<HimapajakFia />} />
              <Route path='partner/himapar' element={<HimaparFia />} />
              <Route path='partner/himadika' element={<HimadikaFia />} />
              <Route path='partner/hmpip' element={<Hmpip />} />
              <Route path='partner/mafioso' element={<Mafioso />} />
              <Route path='partner/sec' element={<SEC />} />
              <Route path='partner/forkim' element={<Forkim />} />
              <Route path='partner/ac' element={<Ac />} />
              <Route path='partner/dianns' element={<Dianns />} />
              <Route path='partner/ssm' element={<Ssm />} />
              <Route path='partner/rsc' element={<Rsc />} />
              <Route path='partner/aec' element={<Aec />} />
              <Route path='partner/amc' element={<Amc />} />
            </Route>
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>

      </RouteTransitionWrapper>
    </Suspense>
       {/* {showLoading && (
  <div
    className={`fixed inset-0 bg-white flex justify-center items-center transition-opacity duration-500 z-50
      ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
    `}
    style={{ transitionProperty: 'opacity' }}
  >
    <img src={loadingf} alt="Loading..." className="w-full h-full object-contain" />
  </div>
)} */}
    </>
  )
}

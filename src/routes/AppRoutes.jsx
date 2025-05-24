import React, { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import AboutPage from '../pages/AboutPage'
import Sections from '../components/sections'
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

const HomePage = lazy(() => (import('../pages/HomePage')))

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="h-screen bg-black flex justify-center items-center">
          <img src={loadingf} alt="Loading..." className="w-full fixed" />
        </div>
      }
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
          </Route>
        </Routes>
      </RouteTransitionWrapper>
    </Suspense>
  )
}

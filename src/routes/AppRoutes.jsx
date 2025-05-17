import React, { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import AboutPage from '../pages/AboutPage'
import Sections from '../components/sections'
import AboutUs from '../components/AboutUs'
import VisiMisi from '../components/VisiMisi'
import ArahanStrategis from '../components/ArahanStrategis'
import ContactUs from '../pages/ContactUs'
import PeopleScrollShowcase from '../pages/PeopleScrollShowcase'
import ScrollGallery from '../components/ScrollGallery'
import ServicePage from '../pages/ServicePage'
import loadingf from '../assets/LOADING SCREEN HOMEPAGE (1).gif'
import Navbar from '../components/Navbar'
import Layout from '../pages/Layout'
import ProgramKerja from '../pages/ProgramKerja'
import Proker from '../pages/Proker'

const HomePage = lazy(() =>
  new Promise(resolve =>
    setTimeout(() => resolve(import('../pages/HomePage')), 3800)
  )
)

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="h-screen bg-black">
          <img src={loadingf} alt="loading" className="w-full fixed contain-content" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />

          <Route path="home" element={<HomePage />} />

          {/* About Page Group */}
          <Route path="about" element={<AboutPage />}>
            <Route index element={<Sections />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="visi&misi" element={<VisiMisi />} />
            <Route path="arahan-strategis" element={<ArahanStrategis />} />
          </Route>

          <Route path="contact-us" element={<ContactUs />} />
          <Route path='program' element={<ProgramKerja />} />
          <Route path="program-kerja" element={<Proker />} />
          <Route path="service" element={<ServicePage />} />


        </Route>
      </Routes>
    </Suspense>
  )
}

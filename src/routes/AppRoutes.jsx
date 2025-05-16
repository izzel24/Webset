import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Card from '../components/card'
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

const HomePage = lazy(() =>
  new Promise(resolve =>
    setTimeout(() => resolve(import('../pages/HomePage')), 3800) // delay 2 detik
  )
)

export default function AppRoutes() {
  return (

        <Routes>
           <Route
          path="/"
          element={
            <Suspense fallback={<div className='h-screen bg-black'><img src={loadingf} alt="" className='w-full contain-content'/></div>}>
              <HomePage />
            </Suspense>
          }
        />
            
            <Route  element={<AboutPage />} >
              <Route path='/about' element={<Sections />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/visi&misi' element={<VisiMisi />} />
              <Route path='/arahan-strategis' element={<ArahanStrategis />} />
            </Route>
             <Route path='/contact-us' element={<ContactUs /> } />
            <Route path='/card' element={<ScrollGallery />}/>
            <Route path='/service' element={<ServicePage />}/>
            <Route path='/navbar' element={<Navbar />} />
        </Routes>
  )
}

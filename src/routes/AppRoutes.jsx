import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
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


export default function AppRoutes() {
  return (

        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route  element={<AboutPage />} >
              <Route path='/about' element={<Sections />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/visi&misi' element={<VisiMisi />} />
              <Route path='/arahan-strategis' element={<ArahanStrategis />} />
            </Route>
             <Route path='/contact-us' element={<ContactUs /> } />
            <Route path='/card' element={<ScrollGallery />}/>
            <Route path='/service' element={<ServicePage />}/>
        </Routes>
  )
}

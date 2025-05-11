import React from 'react'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'

import "../logoMarquee.css"

export default function LogoMarquee() {
  return (
    
    <div className='slider'>

        <div className='slide-track'>
            <div className='slide'>
                <img src={logo1} alt="" />
            </div>
            <div className='slide'>
                <img src={logo2} alt="" />
            </div>
            <div className='slide'>
                <img src={logo3} alt="" />
            </div>
            <div className='slide'>
                <img src={logo1} alt="" />
            </div>
            <div className='slide'>
                <img src={logo2} alt="" />
            </div>
            <div className='slide'>
                <img src={logo3} alt="" />
            </div>
            <div className='slide'>
                <img src={logo1} alt="" />
            </div>
            <div className='slide'>
                <img src={logo2} alt="" />
            </div>
            <div className='slide'>
                <img src={logo3} alt="" />
            </div>
            <div className='slide'>
                <img src={logo1} alt="" />
            </div>
            <div className='slide'>
                <img src={logo2} alt="" />
            </div>
            <div className='slide'>
                <img src={logo3} alt="" />
            </div>
            <div className='slide'>
                <img src={logo1} alt="" />
            </div>
            <div className='slide'>
                <img src={logo2} alt="" />
            </div>
            <div className='slide'>
                <img src={logo3} alt="" />
            </div>
            <div className='slide'>
                <img src={logo1} alt="" />
            </div>
            <div className='slide'>
                <img src={logo2} alt="" />
            </div>
            <div className='slide'>
                <img src={logo3} alt="" />
            </div>
        </div>
        
    </div>

  )
}

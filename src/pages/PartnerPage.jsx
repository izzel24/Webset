import React from 'react'
import oyi from '../assets/oyi.jpg'
import kofuku from '../assets/kofuku.png'
import selfroom from '../assets/selfroom.png'
import k70 from '../assets/k70.png'
import green from '../assets/Vector 5.svg'
import esize from '../assets/logo2.svg'

export default function PartnerPage() {
  return (
    <div className='min-h-screen'>
        <div className='h-screen relative'>
            <img src={green} alt="" className='absolute h-full w-full' />
            <div className='flex flex-col h-full justify-center gap-52 relative z-99 p-10'>
                <div className='flex justify-around items-center'>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${oyi})`}}></div>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${kofuku})`}}></div>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${selfroom})`}}></div>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${k70})`}}></div>
                </div>
                <div className='flex justify-around items-center'>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${esize})`}}></div>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${oyi})`}}></div>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${oyi})`}}></div>
                    <div className='rounded-full h-[200px] w-[200px] bg-cover dropShadow' style={{backgroundImage: `url(${oyi})`}}></div>
                </div>
            </div>
        </div>
        <div className='h-screen relative'>

        </div>
    </div>
  );
}

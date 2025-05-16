import React from 'react'
import "../cardMobileStyle.css"

export default function CardsPortrait({cards=[]}) {



  return (
    <div className="containerd">
      <ul id="cards">
        {cards.map((card, index) => (
          <li className="card1" key={index} id={`card${index + 1}`}>
            <div className="card-body1 flex flex-col justify-start bg-white border-3">
              <div
                className="w-full h-[80%] flex justify-center items-center p-5 rounded-[16px] border-[1.5px] border-b-3"
                style={{ backgroundColor: card.color || '#eee' }}
              >
                <h1 className='font-Britania text-3xl text-center'>{card.title}</h1>
              </div>
              <div className='h-[20%] flex justify-center items-center'>
                <h2 className='font-Bricolage font-extrabold text-[16px] text-center p-2'>{card.body}</h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

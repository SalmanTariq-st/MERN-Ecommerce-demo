import React from 'react'

import MainViewImg from '../assets/MainViewImg.png'
export default function MainView() {
  return (
    <div className='block md:flex justify-between py-10 px-24 sm:px-32 md:px-52 '>
        <div className='text-white font mt-14 '>
            <h1 className=' text-xl md:text-5xl font-bold'>Discover<br></br>Most Suitable<br></br>Watches </h1>
            <p className='  font-light text-xs md:text-base mt-5'>Find the best, reliable, and cheap smart watches here.<br></br> We focus on product quality. Here you can find smart <br></br>watches of almost all brands. So why you are waiting?<br></br> Just order now!</p>
        </div>
    
    <div className=' pt-8  md:pr-10 md:pt-0'>
        <img className=' h-40 sm:h-60 md:h-96' src={MainViewImg} alt=''></img>

    </div>
    
    </div>
  )
}

import React from 'react'
import BrandDescription from './utils/BrandDescription'
import AppleWatch from '../assets/AboutApple.png'
import Xiaomi from '../assets/AboutXiaomi.png'
import Fitbit from '../assets/AboutFitbit.png'
export default function AboutView() {
  return (
    <div className='flex justify-center flex-wrap my-5 '>
      <BrandDescription image={AppleWatch} heading={'Apple'} description={'Apple is one of the most famous smart watches providing company.'}/>
      <BrandDescription image={Xiaomi} heading={'Xiaomi'} description={'Xiaomi smart watches are produced by MI company.'}/>
      <BrandDescription image={Fitbit} heading={'FitBit'} description={'FitBit smart watches are best for there health and fitness features.'}/>
    </div>
  )
}

import React from 'react'
import '../../App.css'
export default function BrandDescription(props) {
  return (
    <div className='m-5 w-80 h-48 bg-gray-100 rounded-xl place-content-center flex justify-center p-5'>

      <img src={props.image} alt=''></img>
      <div className='ml-5 mt-3'>
        <h1 className=' font-bold text-2xl leading-10 views-font'>{props.heading}</h1>
        <p className='font-light views-font '>{props.description}</p>
      </div>
    </div>
  )
}

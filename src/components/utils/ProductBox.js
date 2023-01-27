import React from 'react'
import '../../App.css'
export default function ProductBox(props) {
  return (
    <div className='mx-14 my-7 '>
        <div className='bg-gray-100 w-40  md:w-52 p-5'>

        <img src={`http://localhost:5000/${props.imgName}`} ></img>
        </div>
        <div className='mt-3  md:w-52 text-center '>

       <h1 className='font-bold  font text-base md:text-lg '>{props.name}</h1>
       <div className='flex justify-center  '>

       <h1 className=' line-through mr-2 text-xs md:text-sm leading-5 md:leading-6 font text-zinc-400'>${props.price}</h1> 
       <h1 className='font-semibold font text-sm md:text-base '>${props.price-50}.00</h1> 
       </div>
        </div>
    </div>
  )
}

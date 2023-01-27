import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductBox from './utils/ProductBox'
const API = axios.create({ baseURL: 'http://localhost:5000' })

export default function AllProducts() {

     const [products,setProducts]=useState([])
    

    useEffect(()=>
    {
      const Get=async()=>
      {
         API.get('/getPic').then(async(res)=>
        {
          var b=[]
          b.push(res.data)  
          // console.log(b) 
          setProducts(...b)
          // console.log(b[0])
        //   console.log(a)
          
        }).catch((e)=>
        {
          console.log(e)
        })
      }
      // setInterval(GetPic,3000)
      Get()
      // console.log('abc')
      
    },[])
  
  return (
    <div>
        <div className='my-10'>

        <center className='my-8'>
         <h1  className='views-font text-4xl font-bold'>All Products</h1>
         </center>
        </div>
        {!products.isempty?<div>
        
        <div className='flex justify-center mx-32 md:mx-52 flex-wrap'>
         {products.map((value,index)=>{
           return <div key={value['_id']}>
          
              <ProductBox name={value['name']} price={value['price']} imgName={value['imgName']}/> 
              </div>
         })}
        </div>
          
         
       </div> :<div></div>}
     
    </div>
  )
}

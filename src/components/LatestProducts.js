import React from 'react'
import '../App.css'
import axios from 'axios';
import { useState ,useEffect} from 'react';
import ProductBox from './utils/ProductBox';
import { Link } from 'react-router-dom';
const API = axios.create({ baseURL: 'http://localhost:5000' })


export default function LatestProducts () {

  const [a,seta]=useState([])
   

  const CallNode=async()=>{
    // const url="http://localhost:5000/"
    var data={name:'Samsung Watch',price:'245.00',imgName:'samsungWatch.png'};
    console.log('abc')
     API.post('/',data).then((res)=>{
      
      console.log(res.data)

    }).catch((e)=>{
      console.log(e)
    })
    // console.log(d)

  }

  const GetPic=async()=>
  {
    API.get('/getPic').then((res)=>
    {
      const b=res.data.toString()
      seta(b)
      console.log(a)
      console.log(b)
    }).catch((e)=>
    {
      console.log(e)
    })
  }

  useEffect(()=>
  {
    const Get=async()=>
    {
       API.get('/getPic').then(async(res)=>
      {
        var b=[]
        b.push(res.data)  
        // console.log(b) 
         seta(...b)
        // console.log(b[0])
        console.log(a)
        
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
    <div className='my-8'>
     <center className='my-8'>
         <h1  className='views-font text-4xl font-bold'>Our Latest Products</h1>
         {/* <button onClick={CallNode}>
          <h1>Call Node</h1>
         </button> */}
        </center>
    {/* <center>
        <button onClick={GetPic}>
          <h1>Get Pic</h1>
         </button>
        </center> */}
        {!a.isempty?<div>
        
         <div className='flex justify-center mx-32 md:mx-52 flex-wrap'>
          {a.map((value,index)=>{
            return index<6? <div key={value['_id']}>
           
               <ProductBox name={value['name']} price={value['price']} imgName={value['imgName']}/> 
               </div>:<div></div>
          })}
         </div>
           
          
        </div> :<div></div>}

<center className='mt-10'>

<Link to='/allProducts'>

        <button className='font font-semibold text-white rounded-md px-10 py-2  bg-blue-700'>
          View More
        </button>
</Link>
</center>
     
    </div>
  )
}

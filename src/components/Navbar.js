import React from 'react'
import Apple_Watch from '../assets/Apple_Watch.png'
import Person from '../assets/Person.png'
import Search from  '../assets/Search.png'
import Cart from '../assets/Cart.png'
import Sidebar from '../assets/sidebarIcon.png'
import { useState } from 'react'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classNameList.toggle("hidden");
  }

  return (
    <div>
      
      {/* <div className="bg-gray-200 h-screen w-64 md:hidden right-full  absolute ">
    <div className="px-4 py-4">
        <ul className="text-gray-800">
            <li className="py-2">
                <a href="#" className="text-lg font-medium hover:text-gray-600">Home</a>
            </li>
            <li className="py-2">
                <a href="#" className="text-lg font-medium hover:text-gray-600">Admin</a>
            </li>
            <li className="py-2">
                <a href="#" className="text-lg font-medium hover:text-gray-600">Settings</a>
            </li>
        </ul>
    </div>
  </div> */}

  <div className=' flex justify-start md:justify-evenly ml-8 md:ml-0 '>
<div className=" block md:hidden  pr-2">
      <button className=" block  rounded-full focus:outline-none focus:bg-gray-200" onClick={() => setIsOpen(!isOpen)}>
       <img src={Sidebar} className='w-6' ></img>
      </button>
      <div className={` top-0 left-0 w-full h-full bg-white z-50  ${isOpen ? 'absolute' : 'hidden'}`}>
        <div className="px-4 py-6">
          <ul>
            <li>Home</li>
            <li>Brands</li>
            <li>Recent Products</li>
            <li>Contacts</li>
            <li>About</li>
          </ul>
          <p className="text-sm text-gray-600">You can add your sidebar content here.</p>
          <button className="relative block w-12 h-12 p-2 rounded-full focus:outline-none focus:bg-gray-200" onClick={() => setIsOpen(!isOpen)}>
            <p>Close</p>
</button>
        </div>
      </div>
    </div>



        
        {/* <div className='flex md:hidden mx-3 md:mx-0'>
          <img src={Sidebar} className='w-6 '></img>
        </div> */}
        <div className='font text-white flex pl-5 md:pl-0'>
            <img src={Apple_Watch} alt="" ></img>
            <h1 className='text-lg'>Salman</h1>   
        </div>
        <div className='hidden md:flex font text-white font-light   '>
            <h2 className='mx-3'>Home</h2>
            <h2 className='mx-3'>Brands</h2>
            <h2 className='mx-3'>Recent Products</h2>
            <h2 className='mx-3'>Contacts</h2>
            <h2 className='mx-3'>About</h2>

        </div>

        <div className='hidden md:flex md:mr-0 mr-6 '>
            <img className='mx-2 h-5' src={Search} alt=""></img>
            <img className='mx-2 h-5' src={Person} alt=""></img>
            <img className='mx-2 h-5' src={Cart} alt=""></img>

        </div>

      </div>
    </div>
  )
}

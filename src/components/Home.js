import React from 'react'
import AboutView from './AboutView'
import LatestProducts from './LatestProducts'
import MainView from './MainView'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'  
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SubView from './SubView'
import AllProducts from './AllProducts'

export default function Home() {

  return (
    <>
    <div className='pt-6 div-background w-100 h-fit'>
      <Navbar/>
      <MainView/>
    </div>
<BrowserRouter>
<Routes>

    <Route path='/'  element={ <SubView/>} />
    <Route path='/allProducts'  element={ <AllProducts/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

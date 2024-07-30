import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About';
import LocaStorage from './LocaStorage';
function Rut() {
  return (
    <>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/localstorage' element={<LocaStorage/>}></Route>
    </Routes>
       
    </>
  )
}

export default Rut

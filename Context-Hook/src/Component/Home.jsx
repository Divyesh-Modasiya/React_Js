import React, { createContext, useState } from 'react'
import Footer from './Footer'
import About from './About'
import Product from './Product'

export const context=createContext()
export default function Home() {

  const [data,setdata]=useState("")
  return (
    <div className='w-full h-[100vh]'>
      <label htmlFor="">Enter Your First Name : </label>
      <input type="text" placeholder='enter name' value={data} onChange={(e)=>setdata(e.target.value)} />

      <context.Provider  value={data}>
          <Footer/>
      </context.Provider>


      <Product/>


      <context.Provider  value={data}>
          <About/>
      </context.Provider>
    </div>
  )
}




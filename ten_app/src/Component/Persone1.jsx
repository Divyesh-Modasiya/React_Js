import React from 'react'
import img1 from './img1.jpg'
import Maincomponent from './Maincomponent'

function Persone1({data,handelincrement}) {
  
  return (
    <>
    <div className="text w-full bg-black text-white">
        <h1 className='text-[50px] font-bold text-center'>Our Menu</h1>
    </div>
    <div className="first w-full bg-black text-white py-[50px] flex flex-col justify-center items-center">
      <img src={img1} alt="" className='w-[15%] h-[200px]' />  
    <h1 className='text-[20px] font-bold'>Quntity :- {data} </h1>
    <button className='w-[15%] h-[40px] border rounded-[10px]' onClick={handelincrement}>Add +</button>
    </div>
      
    </>
  )
}

export default Maincomponent(Persone1)

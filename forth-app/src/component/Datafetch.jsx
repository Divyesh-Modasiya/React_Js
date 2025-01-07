import React from 'react'
import { useState,useEffect } from 'react'

function Datafetch() {

    const [data,setData] = useState([])
    useEffect(()=>{
        const datafetched=async()=>{
            try{
                let response = await fetch('https://fakestoreapi.com/products')
                let jsondata = await response.json()
                console.log(jsondata)
                setData(jsondata)
            }
            catch(err){
                console.log(err)
            }
        }
        datafetched()
    },[])
  return (
    <>
    <h1 className='text-[40px] font-bold text-center'>Our Product Menu</h1>
         < div className='main flex w-full flex-wrap justify-evenly'>
    {
        
    data.map((el,index)=>{
        return <div key={index} className='mainbox flex w-[23%] border-[1px] border-[black] rounded-[20px] my-[10px]'>
            <div className='subbox w-full h-[450px] flex flex-col justify-center items-center px-[50px]'>
            <img src={el.image} alt="" className='w-[200px] h-[200px]' />
            <h1 className='text-center text-[15px]'>Title :- {el.title}</h1>
            <h1 className='text-[15px]'>Price :- {el.price}</h1>
            <h1 className='text-[px]'>Rating :- {el.rating.rate}</h1>
            <button className='w-[80%] h-[40px] bg-black rounded-[10px] text-white'>Add To Cart</button>
            </div>
       
        </div>
            
    
    })
    
    }
      
    </div>
    </>
   
  )
}

export default Datafetch

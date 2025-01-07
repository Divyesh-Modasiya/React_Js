import React from 'react'
import { useState , useEffect } from 'react'

function New() {

    const [data,setData] = useState([])

   useEffect(()=>{
    const dataFetched=async()=>{
        try{
            let response = await  fetch('https://fakestoreapi.com/products')
            let jsonData = await response.json()
            console.log(jsonData)
            setData(jsonData)
        }
        catch(err){
            console.log(err)  
        }
    }
        dataFetched()
   },[])

  return (
    <>
      {
        data.map((el)=>{
            return <>
        <h1>{el.title}</h1>
        <img src={el.image} alt="" />
        </>
        })
      }
    </>
  )
}

export default New

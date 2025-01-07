import React from 'react'
import { useState } from 'react'

function About() {
    const[data,setData] = useState({
        name : "" ,
        age: ""
    })
    const handelSubmit=(e)=>{
        e.preventDefault()
        alert("submited")
    }
    const handelChange=(e)=>{
        const {name , value} = e.target   

        setData({
            ...data,
            [name] : value
        })
    }
    const reset=()=>{
        setData({name:'',age:' '})  
    }
  return (
    <>
    <center>
    <form action="" onSubmit={handelSubmit} className='h-[300px] w-[30%] shadow-2xl mt-[120px] rounded-[10px] pt-[20px]'>
        <h1 className='text-[30px] font-bold mb-[30px]'>Log <span className='text-[#2929ab]'>In</span></h1>
      <label >Name:-</label>
      <input type="text" name='name'    value={data.name} onChange={handelChange} className='border-b-[2px] border-[black] outline-none ms-[20px]' /> <br /><br />
      <label>Age:-</label>
      <input type="number" name='age'   value={data.age} onChange={handelChange} className='border-b-[2px] border-[black] outline-none ms-[30px]' /> <br /><br />
      <input type="submit" className='mt-[20px] border-[1px] px-[25px] py-[8px] rounded-[10px] bg-black text-white' />
      <button className='mt-[20px] border-[1px] px-[25px] py-[8px] rounded-[10px] bg-black text-white' onClick={reset}>Reset</button>
    </form>
    </center>

  </>
  )
}

export default About

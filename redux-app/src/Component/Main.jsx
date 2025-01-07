import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../Redux/Action'

function Main() {

    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()

    const increment =()=>{
        dispatch(inc())
    }
    const decrement =()=>{
        dispatch(dec())
    }

  return (
    <>
      <div className="counter w-full h-[100vh] bg-black text-white flex justify-center items-center">
        <div className="box">
        <h1 className='text-center text-[50px]'>Count :- {count}</h1>
        <button className='w-[120px] h-[40px] border rounded' onClick={increment}>Increment +</button>
        <button className='w-[120px] h-[40px] border rounded' onClick={decrement} disabled={count===0}>Decrement -</button>
        </div>
      </div>
    </>
  )
}

export default Main

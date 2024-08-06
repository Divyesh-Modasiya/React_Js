import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../redux/Action'

function Home() {

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
     <div className="main">
        
        <div className="box">
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment +</button>
            <button onClick={decrement} disabled={count===0}>Decrement -</button>
        </div>
        
        </div> 
    </>
  )
}

export default Home

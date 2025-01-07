import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './Redux/Action';

function Home() {

    const [data,setData] = useState("");
    const Collection = useSelector((state)=>state.task);
    const dispatch = useDispatch();


    const handelSubmit = () =>{
        console.log(data);
        
        if (data) {
            dispatch(addData({ id: Date.now() ,name:data})); // Corrected dispatch
          }
          setData("");
    }
  return (
    <>
     <input type="text" placeholder='Enter name' onChange={(e)=>setData(e.target.value)} /> 
     <button onClick={handelSubmit}>Submit</button>

     <div>
        {
            Collection.map((el)=>{
                <li>{el.name}</li>
            })
        }
     </div>
    </>
  )
}

export default Home

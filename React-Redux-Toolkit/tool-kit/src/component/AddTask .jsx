import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData,editData } from '../Redux/TodoSlice';


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [edit,setEdit]=useState(null)
  const dispatch = useDispatch()  // use for send data 
  const AddTask = ()=>{
    if (edit == null) {
      let obj = {id:Date.now(),title}
    dispatch(addData(obj)) 
    }// send data to TodoSlice action.payload
    else{
      let updateObj = {id:edit,title}
      dispatch(editData(updateObj))
    }
    setTitle("")
  }
  let data = useSelector((state)=>{ // import data from store using todoSlice key
    return state.todoSlice.data  
  })

  const handelDelete = (id)=>{  // take id as argyument
    dispatch(deleteData(id))  // send data TodoSlice action.payload
  }

  const handelEdit = (e) =>{
    setTitle(e.title)
    setEdit(e.id)

  }
 return (
  <div>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <button onClick={()=>AddTask()}>AddData</button>
    {
      data && 
      data.map((e,i)=>{
        return <ul key={i}>
          <li>{e.id}</li>
          <li>{e.title}</li>
          <button onClick={()=>handelDelete(e.id)}>Delete</button> 
          <button onClick={()=>handelEdit(e)}>Edit</button> 
        </ul>
      })
    }
  </div>
 )}

export default AddTask;

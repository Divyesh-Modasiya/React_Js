import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/Action";

function Home() {
    const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const addtodo = () => {
    if (todo) {
    dispatch(addTodo({ id: Date.now(), name: todo }));
      }
      setTodo("");
  };
  const edittodo=(id)=>{
    let x = prompt("Update Your GRID");
    if(x){
        dispatch(editTodo(id,x));
    }
  }
  const deletetodo=(id)=>{
    dispatch(deleteTodo(id));
  }
  return (
    <>
      <div id="MainBox" className="main w-full h-[100vh] flex flex-col items-center">
        <h1 id="head" className="text-[40px] mt-[20px] font-bold ">Enter Student GRID</h1>
        <div className="main2 flex justify-center mt-[50px]">
        <input
        className="bg-transparent border rounded-2xl outline-none ps-[10px] w-[300px] h-[40px] placeholder:text-[black] font-bold"
          type="text"
          placeholder="Enter Your GRID"
          value={todo}
          onChange={(el) => setTodo(el.target.value)}
        />
        <button className="w-[150px] h-[40px] ms-[10px] border rounded-2xl font-bold hover:bg-[#00000082] hover:text-white" onClick={addtodo}>Submit</button>
        </div>
       
        <div className="main w-[450px] mt-[50px] bg-[#0000007a] rounded-2xl py-[20px] text-white">
        {task.map((el,i)=>{
            return <div className="flex w-full items-center justify-around px-[50px] mt-[10px]" key={i}>
                    <li className="text-[20px] font-bold">{el.name}</li>
                    <button className="w-[100px] h-[40px] font-bold rounded-md border hover:text-white  hover:bg-[#00000082]" onClick={()=>edittodo(el.id)}>Edit</button>
                    <button className="w-[100px] h-[40px] rounded-md border font-bold hover:text-white hover:bg-[#00000082]" onClick={()=>deletetodo(el.id)} >Delete</button>
            </div>
          })
        }
        </div>
      </div>
    </>
  );
}

export default Home;

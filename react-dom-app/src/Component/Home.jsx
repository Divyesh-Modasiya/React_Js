import React, { useEffect, useState } from 'react'

function Home() {
  const [todo, Setdata] = useState("");
  const [info, Setinfo] = useState([]);
  const [edit, setEdit] = useState(-1);



  const updateTodo=()=> {
    
    let x = JSON.parse(localStorage.getItem("todos"))
    if(x){
        x.splice(edit,1,{value:todo})
        Setinfo(x)
    }
    localStorage.setItem("todos",JSON.stringify(info))
    setEdit(-1)
    Setdata("")
}

    // edit todo

    const EditTodo = (value, index) => {
      Setdata(value);
      setEdit(index);
      
     
    };
    //

    // delete todo
    const DeleteTodo=(index)=>{
      const task = info.filter((el,i)=>i!== index)
      Setinfo(task)
}
    // 

  useEffect(()=>{
    
    let x = JSON.parse(localStorage.getItem("todos"));
    if (x) {
      Setinfo(x);
    }
  },[])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(info));
  }, [info, todo]);
  return (
    <>
        <div className='w-full h-[200vh] flex flex-col items-center bg-black text-white'>
        
        <div className='w-full flex justify-center mt-[50px]'>
          <input
            type="text"
            className="w-[20%] h-[40px] border-b bg-transparent border-white outline-none"
            value={todo}
            onChange={(e) => Setdata(e.target.value)}
            placeholder="Enter value"
          />
           <button onClick={updateTodo} className='border-b border-white'>
            Update
          </button>
          </div>
          <div className='flex'>
        <ul>
          {info.map((el, index) => {
            return (
              <div className="ms-10 flex mt-[50px]">
                <li className='text-[20px] font-bold me-[20px] list-disc'>{el.value}</li>
                <button className='w-[80px] h-[35px]  border border-white rounded-[5px]' onClick={() => EditTodo(el.value, index)}>Edit</button>
                <button  className='w-[80px] h-[35px]  border border-white rounded-[5px]' onClick={() => DeleteTodo(index)} >Remove</button>
              </div>
            );
          })}
        </ul>
        </div>
      </div>
    </>
  )
}

export default Home

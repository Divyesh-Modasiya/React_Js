import React, { useEffect, useState } from "react";

function LocaStorage() {
  const [todo, Setdata] = useState("");
  const [info, Setinfo] = useState([]);
  // const [edit, setEdit] = useState(-1);

 
//   update todo 

// const updateTodo=()=> {
//     let x = JSON.parse(localStorage.getItem("todos"))
//     if(x){
//         x.splice(edit,1,{value:todo})
//         Setinfo(x)
//     }
//     localStorage.setItem("todos",JSON.stringify(info))
//     setEdit(-1)
//     Setdata("")
// }
//

  console.log(todo);
  function Addtodo() {
    Setinfo([...info, { value: todo }]);
    Setdata("");
  }

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("todos"));
    if (x) {
      Setinfo(x);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(info));
  }, [info, todo]);
  console.log(info);
  return (
    <>
      <div className="first  justify-center bg-black h-[86.2vh] text-white">
        <div className="w-full pt-[60px]">
          <h1 className="text-center text-[30px]">Enter Your Choice</h1>
        </div>
        <div className="subbox w-full flex justify-center mt-[50px]">
          
          <input
            type="text"
            className="w-[20%] h-[40px] border-b border-white bg-transparent outline-none"
            value={todo}
            onChange={(e) => Setdata(e.target.value)}
            placeholder="Enter value"
          />
          <button
            onClick={Addtodo}
            className="h-[40px] w-[5%] border-white border-b"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
}

export default LocaStorage;

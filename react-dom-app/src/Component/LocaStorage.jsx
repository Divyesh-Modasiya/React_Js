import React, { useEffect, useState } from "react";

function LocaStorage() {
  const [todo, Setdata] = useState("");
  const [info, Setinfo] = useState([]);
  const [edit, setEdit] = useState(-1);

 
//   update todo 

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
      <div className="first flex justify-center items-center">
        <div className="subbox w-[80%] flex justify-center mt-[100px]">
          <input
            type="text"
            className="w-[20%] h-[40px] border-b border-black outline-none"
            value={todo}
            onChange={(e) => Setdata(e.target.value)}
            placeholder="Enter value"
          />
          <button
            onClick={Addtodo}
            className="h-[40px] w-[5%] border-black border-b"
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

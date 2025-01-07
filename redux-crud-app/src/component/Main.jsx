import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/Action";

function Main() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const task = useSelector((state) => state.task);
  const addTod = () => {
    if (todo) {
      dispatch(addTodo({ id: Date.now(), name: todo }));
    }
    setTodo("");
  };
  const edittodo = (id) => {
    let x = prompt("enter new data");
    if (x) {
      dispatch(editTodo(id, x));
    }
  };
  const deletetodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className="first flex flex-col items-center bg-black text-white h-[100vh] ">
        <div className="main mt-[50px] ">
          <input
            className="bg-transparent outline-none w-[300px] h-[40px] border rounded-md"
            type="text"
            placeholder="Enter value"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTod}>Submit</button>

          <div className="data flex mt-[30px]">
            {task?.map((el, i) => { 
              return (
                <>
                  <li key={i} className="list-disc">
                    {el.name}
                  </li>
                  <button className="border w-[100px] h-[30px] rounded mx-[5px]" onClick={()=> edittodo(el.id)}>Edit</button>
                  <button className="border w-[100px] h-[30px] rounded mx-[5px]" onClick={()=> deletetodo(el.id)}>Delete</button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

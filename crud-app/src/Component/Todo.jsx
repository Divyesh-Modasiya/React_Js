import React from "react";

function Todo() {
  return (
    <>
      <div className="first bgimg w-full h-[100vh]">
        <div className="head">
          <h1 className=" maintext text-[50px] text-center font-bold">
            CRUD OPERATION
          </h1>
        </div>
      
        <div className="mainbox w-full flex justify-center mt-[50px]">
          <input
            type="text"
            placeholder="Enter Your Task"
            className="bg-transparent h-[50px] w-[500px] border-b outline-none text-white"
          />
          <button className="text-white h-[50px] border w-[80px] rounded-t-[10px]">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;

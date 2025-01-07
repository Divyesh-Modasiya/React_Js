import React from "react";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
function Rendring() {
  const [state, setState] = useState(0);
  function handelLogout() {
    setState(0);
  }
  function handelLogin() {
    setState(1);
  }
  return (
    <div>
      {state ? (
        <div className="bg-black h-[100vh]">
            <Home/>
            <center>
            <button className="w-[200px] h-[50px] bg-white text-black font-bold  rounded-[10px]" onClick={handelLogout}>Log out</button>
            </center>
             
         
        </div>
      ) : (
        <div className="bg-black h-[100vh]">
            <About/>
          
         <center>
         <button className="w-[200px] h-[50px] bg-white text-black font-bold  rounded-[10px]" onClick={handelLogin}>Log in</button>
         </center>
        </div>
      )}
    </div>
  );
}

export default Rendring;

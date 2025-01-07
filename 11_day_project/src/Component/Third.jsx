import React from "react";
import First from "./First";
import Second from "./Second";
import Forth from "./Forth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";

function Third() {
  return (
    <>
      <h1 className="text-[50px] text-center text-white mt-[10px] mb-[50px]">
        Our Menu
      </h1>
      <div className="main w-full flex justify-evenly">
        <First />
        <Second />
        <Forth />
        <Fifth />
        <Sixth />
      </div>
    </>
  );
}

export default Third;

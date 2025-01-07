import React from "react";
import Home from "./Home";
import img2 from "./img2.avif";

function Second({ data, Clickbtn, Clickagain, price }) {
  return (
    <>
      <div className="s2 w-[15%]">
        <img src={img2} alt="" className="w-full h-[250px] rounded-[10px]" />
        <h1 className="text-[20px] font-bold text-center">Quntity :- {data}</h1>
        <h1 className="text-[20px] font-bold text-center">
          Price :- {data * price}$
        </h1>
        <div className="btn w-full flex justify-evenly">  
          <button
            className="w-[40%] text-[13px] font-bold rounded-[10px] text-white border h-[40px] bg-black"
            onClick={Clickbtn}
          >
            Add +
          </button>
          <button
            className="w-[40%] text-[13px] font-bold rounded-[10px] text-white border h-[40px] bg-black"
            onClick={Clickagain}
          >
            Remove -
          </button>
        </div>
      </div>
    </>
  );
}

export default Home(Second);

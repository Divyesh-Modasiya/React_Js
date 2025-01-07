import React from "react";
import Home from "./Home";
import img1 from "./img1.avif";

function First({ data, Clickbtn, Clickagain, price }) {
  return (
    <>
      <div className="s1 w-[15%]">
        <img src={img1} alt="" className="w-full h-[250px] rounded-[10px]" />
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

export default Home(First);

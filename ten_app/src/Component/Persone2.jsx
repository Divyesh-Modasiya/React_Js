import React from "react";
import img2 from './img2.jpg'

import Maincomponent from "./Maincomponent";
function Persone2({ data, handelincrement }) {
  return (
    <>
      <div className="second w-full bg-black text-white py-[50px] flex flex-col justify-center items-center">
        <img src={img2} className="w-[15%] h-[200px]" alt="" />
        <h1 className="text-[20px] font-bold">Quntity :- {data}</h1>
        <button className="w-[15%] h-[40px] rounded-[10px] border" onClick={handelincrement}>Add +</button>
      </div>
    </>
  );
}

export default Maincomponent(Persone2);

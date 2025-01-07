import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import img2 from "./Assest/img2.avif";
import img3 from "./Assest/img3.avif";
import img4 from "./Assest/img4.avif";
import img5 from "./Assest/img5.avif";

const Main = () => {
  const [state,setState]=useState(1)
  const add=()=>{
    setState(state + 1)
  }

  const remove=()=>{
    if (state===0) {
      setState(0)
    }
    else{
      setState(state - 1)
    }
  }
  const cancle=()=>{
    setState(0)
  }



  const [state1,setState1]=useState(1)
  const add1=()=>{
    setState1(state1 + 1)
  }

  const remove1=()=>{
    if (state1===0) {
      setState1(0)
    }
    else{
      setState1(state1 - 1)
    }
  }
  const cancle1=()=>{
    setState1(0)
  }



  const [state2,setState2]=useState(1)
  const add2=()=>{
    setState2(state2 + 1)
  }

  const remove2=()=>{
    if (state2===0) {
      setState2(0)
    }
    else{
      setState2(state2 - 1)
    }
  }
  const cancle2=()=>{
    setState2(0)
  }


  const [state3,setState3]=useState(1)
  const add3=()=>{
    setState3(state3 + 1)
  }

  const remove3=()=>{
    if (state3===0) {
      setState3(0)
    }
    else{
      setState3(state3 - 1)
    }
  }
  const cancle3=()=>{
    setState3(0)
  }
  
  return (
    <>
      <div className="main w-full h-[585px]">
        <div className="navbar w-full h-[80px] flex justify-evenly relative z-10 top-0">
          <div className="logo w-[20%] h-full flex justify-center items-center">
            <h1 className="text-[white] text-[35px] font-bold">
              Master <span className="text-[#FE8601] font-bold">Kitchen</span>
            </h1>
          </div>
          <div className="navlink w-[70%] h-full text-white text-[20px] flex justify-evenly items-center">
            <a href="#">
              {" "}
              <span className="text-[#FE8601]">H</span>ome
            </a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="s1 relative z-10 top-[120px] px-[100px]">
          <h1 className="text-[60px] font-semibold text-white text-center ">
            Food that makes you say <span className="text-[#FE8601]">wow</span>
          </h1>
          <p className="text-white text-center text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minus autem fuga harum, doloribus quo dolorem maiores fugit saepe
            quaerat magni quam ex blanditiis neque ad eveniet. Mollitia,
            deleniti possimus Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deserunt minus autem fuga harum, doloribus quo dolorem maiores
            fugit saepe quaerat magni quam ex blanditiis neque ad eveniet.
            Mollitia, deleniti possimus.
          </p>
        </div>
      </div>
      <div className="heading bg-black">
        <h1 className="text-[white] text-[50px] font-semibold text-center pt-5">
          <span className="text-[#FE8601]">O</span>ur Menu
        </h1>
      </div>
      <div className="s2 w-full bg-black">
        <div className="mainbox flex">
          <div className="firstbox w-[25%] py-[20px]">
            <img
              src={img2}
              alt=""
              className="w-[80%] h-[70%] ms-[10%] rounded-[10px]"
            />
            <div className="btnbox flex justify-evenly mt-[20px]">
              <button onClick={add} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Add +
              </button>
              <h1 className="text-white text-[25px] font-bold">{state}</h1>
              <button onClick={remove} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Remove -
              </button>
            </div>
            <h1 className="text-white text-center my-[5px] font-semibold">
              Total Amount = {state*28} $
            </h1>
            <div className="cancelbox">
              <button onClick={cancle} className="w-[80%] ms-[10%] h-[40px] rounded-[10px] bg-[#FE8601] font-semibold text-[18px]">
                Cancle
              </button>
            </div>
          </div>
          <div className="secondbox w-[25%] py-[20px]">
            <img
              src={img3}
              alt=""
              className="w-[80%] h-[70%] ms-[10%] rounded-[10px]"
            />
            <div className="btnbox flex justify-evenly mt-[20px]">
              <button onClick={add1} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Add +
              </button>
              <h1 className="text-white text-[25px] font-bold">{state1}</h1>
              <button onClick={remove1} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Remove -
              </button>
            </div>
            <h1 className="text-white text-center my-[5px] font-semibold">
              Total Amount = {state1*15} $
            </h1>
            <div className="cancelbox">
              <button onClick={cancle1} className="w-[80%] ms-[10%] h-[40px] rounded-[10px] bg-[#FE8601] font-semibold text-[18px]">
                Cancle
              </button>
            </div>
          </div>
          <div className="thirdbox w-[25%] py-[20px]">
            <img
              src={img4}
              alt=""
              className="w-[80%] h-[70%] ms-[10%] rounded-[10px]"
            />
            <div className="btnbox flex justify-evenly mt-[20px]">
              <button onClick={add2} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Add +
              </button>
              <h1 className="text-white text-[25px] font-bold">{state2}</h1>
              <button onClick={remove2} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Remove -
              </button>
            </div>
            <h1 className="text-white text-center my-[5px] font-semibold">
              Total Amount = {state2*32} $
            </h1>
            <div className="cancelbox">
              <button onClick={cancle2} className="w-[80%] ms-[10%] h-[40px] rounded-[10px] bg-[#FE8601] font-semibold text-[18px]">
                Cancle
              </button>
            </div>
          </div>
          <div className="forthbox w-[25%] py-[20px]">
            <img
              src={img5}
              alt=""
              className="w-[80%] h-[70%] ms-[10%] rounded-[10px]"
            />
            <div className="btnbox flex justify-evenly mt-[20px]">
              <button onClick={add3} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Add +
              </button>
              <h1 className="text-white text-[25px] font-bold">{state3}</h1>
              <button onClick={remove3} className="text-white w-[30%] h-[40px] border-[1px] border-white rounded-[10px]">
                Remove -
              </button>
            </div>
            <h1 className="text-white text-center my-[5px] font-semibold">
              Total Amount = {state3*22} $
            </h1>
            <div className="cancelbox">
              <button onClick={cancle3} className="w-[80%] ms-[10%] h-[40px] rounded-[10px] bg-[#FE8601] font-semibold text-[18px]">
                Cancle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

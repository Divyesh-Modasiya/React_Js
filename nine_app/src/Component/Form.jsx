import React from "react";
import { useRef } from "react";
import img1 from "./img1.png";
import google from "./google.png";
import facebook from "./facebook.png";
function Form() {
  const nameRef = useRef(null);
  const nameRef1 = useRef(null);
  const nameRef2 = useRef(null);

  const handelchange = (e) => {
    e.preventDefault();
    alert(
      `${nameRef.current.value} ${nameRef1.current.value}  ${nameRef2.current.value}`
    );
  };
  return (
    <>
      <div className="main w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="mainform w-[70%] h-[87%] border-[1px] border-[#F4877D] rounded-[20px] flex">
          <div className="firstbox w-[50%] h-full rounded-s-[20px] overflow-hidden">
            <img src={img1} alt="" className="w-full h-full" />
          </div>
          <div className="secondbox w-[50%] h-full bg-black rounded-e-[20px] overflow-hidden">
            <div className="s1 w-full h-[160px] text-white">
              <h1 className="ps-[60px] text-[30px] mt-[20px] font-bold">
                Get Started
              </h1>
              <p className="ps-[60px] text-[13px] tracking-[2px]">
                Alredy have a account?
              </p>
              <span className="ps-[60px] text-[13px] cursor-pointer text-[#F2796E]">
                Log In
              </span>

              <div className="btnbox w-full flex justify-center mt-[20px]">
                <button className="text-black font-semibold bg-white shadow-black shadow-2xl text-[13px] w-[35%] h-[35px] flex justify-evenly items-center border-[1px] px-[20px] rounded-[3px] mx-[10px]">
                  {" "}
                  <img src={google} className="w-[18%]" alt="" /> Sign Up
                </button>
                <button className="text-[13px] text-white font-semibold shadow-2xl w-[35%] h-[35px] bg-black flex justify-evenly items-center border-[1px] px-[20px] rounded-[3px] mx-[10px]">
                  {" "}
                  <img src={facebook} className="w-[30%]" alt="" /> Sign Up
                </button>
              </div>
            </div>

            <h1 className="text-[30px] text-white text-center">Or</h1>

            <div className="s2 w-full">
              <form
                onSubmit={handelchange}
                className="text-white w-full ms-[15%]"
              >
                <label>Name</label>
                <br />
                <input
                  ref={nameRef}
                  className="outline-none w-[70%] h-[30px] bg-transparent border-b border-[#F4877D]"
                  type="text"
                  placeholder="Jay Saheb"
                />
                <br />
                <br />
                <label>Email</label>
                <br />
                <input
                  ref={nameRef1}
                  className="outline-none w-[70%] h-[30px] bg-transparent border-b border-[#F4877D]"
                  type="email"
                  placeholder="abc@gmail.com"
                />
                <br />
                <br />
                <label>Password</label>
                <br />
                <input
                  ref={nameRef2}
                  className="outline-none w-[70%] h-[30px] bg-transparent border-b border-[#F4877D]"
                  type="password"
                  placeholder="*******"
                />
                <br />
                <br />

                <input
                  type="submit"
                  className="w-[70%] bg-[#F4877D] h-[35px] rounded-[5px] text-black text-[15px] font-semibold cursor-pointer"
                />  
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;

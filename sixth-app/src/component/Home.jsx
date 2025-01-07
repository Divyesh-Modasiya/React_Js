import React from "react";
import img1 from "../component/img1.png"
function Home() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main w-full h-[500px] flex justify-evenly my-[30px]">
        <div className="firstbox w-[50%] h-full bg-white rounded-[10px]">
            <h1 className="text-[40px] font-bold text-center">Mediclaim Policy</h1>
            <p className="text-[18px] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

            <div className="subbox w-full h-full flex">
                <div className="subbox1 w-[50%] h-full">
                    <div className="subFirst h-[80%] flex flex-col items-center justify-evenly">
                        <div className="subFirst_1 w-[80%] border-[1px] rounded-[10px] text-center shadow-xl p-[10px]">
                            <h1>30 minutes claim support##</h1>
                            <p>(In 120+ cities)</p>
                        </div>
                        <div className="subFirst_1 w-[80%] border-[1px] rounded-[10px] text-center shadow-xl p-[10px]">
                            <h1>30 minutes claim support##</h1>
                            <p>(In 120+ cities)</p>
                        </div>
                        <div className="subFirst_1 w-[80%] border-[1px] rounded-[10px] text-center shadow-xl p-[10px]">
                            <h1>30 minutes claim support##</h1>
                            <p>(In 120+ cities)</p>
                        </div>
                        <div className="subFirst_1 w-[80%] border-[1px] rounded-[10px] text-center shadow-xl p-[10px]">
                            <h1>30 minutes claim support##</h1>
                            <p>(In 120+ cities)</p>
                        </div>
                    </div>
                </div>
                <div className="subbox2 w-[50%] h-full">
                    <div className="subFirst h-[80%] flex flex-col items-center justify-evenly">
                       <img src={img1} alt="" />
                    </div>  
                </div>
            </div>
        </div>
        <div className="firstbox w-[40%] h-full bg-white rounded-[10px]">
            <h1 className="text-[25px] font-bold text-center mt-[50px]">Find affordable plans with up to 25% Discount**</h1>
            <p className="text-[18px] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

            <div className="info flex flex-wrap justify-evenly">
                <div className="box w-[40%] h-[50px] border-[1px] rounded-[10px] flex justify-center items-center shadow-xl my-[20px]">
                    <h1 className="text-[20px] font-semibold">Self</h1>
                </div>
                <div className="box w-[40%] h-[50px] border-[1px] rounded-[10px] flex justify-center items-center shadow-xl my-[20px]">
                    <h1 className="text-[20px] font-semibold">Self</h1>
                </div>
                <div className="box w-[40%] h-[50px] border-[1px] rounded-[10px] flex justify-center items-center shadow-xl my-[20px]">
                    <h1 className="text-[20px] font-semibold">Self</h1>
                </div>
                <div className="box w-[40%] h-[50px] border-[1px] rounded-[10px] flex justify-center items-center shadow-xl my-[20px]">
                    <h1 className="text-[20px] font-semibold">Self</h1>
                </div>
                <div className="box w-[40%] h-[50px] border-[1px] rounded-[10px] flex justify-center items-center shadow-xl my-[20px]">
                    <h1 className="text-[20px] font-semibold">Self</h1>
                </div>
                <div className="box w-[40%] h-[50px] border-[1px] rounded-[10px] flex justify-center items-center shadow-xl my-[20px]">
                    <h1 className="text-[20px] font-semibold">Self</h1>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;

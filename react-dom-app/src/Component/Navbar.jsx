import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="main w-full bg-black h-[80px] text-white text-[30px] flex justify-evenly items-center">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/localstorage">LocalStorage</Link>
      </div>
    </>
  );
}

export default Navbar;

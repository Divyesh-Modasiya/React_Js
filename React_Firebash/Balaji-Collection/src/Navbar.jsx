import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-black text-white flex justify-between items-center'>
      <div className='w-[15%]'>
        <h1 className='text-[25px] font-bold'>Balaji Collection</h1>
      </div>
      <ul className='w-[60%] flex justify-evenly'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking Form</Link>
        </li>
        <li>
          <Link to="/booked">Booked Products</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;

// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-[black] text-white p-4 flex justify-between items-center w-full fixed top-0 z-10">
      <div className='w-[20%] text-[30px] font-bold'>
      <Link to="/"><h1> <span className='text-[red]'>MD</span>'s Movies</h1></Link>  
      </div>
      <div className='w-[40%]'>
      <ul className=" space-x-4 flex justify-evenly items-center text-[18px] font-bold">
        <li>
          <Link to="/" className="hover:underline"> <span className='text-[red]'>H</span>ome</Link>
        </li>
        <li>
          <Link to="/watchlist" className="hover:underline"><span className='text-[red]'>W</span>atchlist</Link>
        </li>
        <li>
          <Link to="/admin" className="hover:underline"><span className='text-[red]'>A</span>dmin</Link>
        </li>
      </ul>
      </div>
      
    </div>
  );
}

export default NavBar;

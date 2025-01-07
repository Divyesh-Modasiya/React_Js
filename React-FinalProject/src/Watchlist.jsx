import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from './Redux/Action';
import Footer from './Footer';

function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromWatchlist(id));
  };

  return (
    <>
      <h1 className='text-[30px] text-center font-bold mt-[100px]'>Your Watchlist</h1>
      <div className='w-[90%] ms-[5%] border border-[black] my-[20px]'></div>

      <div>
        {watchlist.length === 0 ? (
          <h2 className='text-[20px] text-center mt-[20px] font-semibold'>Your Watchlist is empty!</h2>
        ) : (
          <div className="el-list flex flex-wrap justify-evenly">
            {watchlist.map((el) => (
              <div key={el.id} data-aos="fade-up" className="el-item w-[23%] p-4 relative group flex flex-col justify-center items-center py-[30px] my-[20px] rounded-[10px]">
                <img src={el.img} alt={el.name} className="w-[200px] h-[300px] object-cover transition-opacity duration-300 rounded-[10px]" />
                <h2>{el.name}</h2>
                <p>Director : {el.director}</p>
                <p>IMDB : {el.rating}</p>
                <button
                  onClick={() => handleDelete(el.id)}
                  className="bg-red-500 w-[150px] rounded-[5px] text-white p-2 mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          
        )}

      </div>
    </>
  );
}

export default Watchlist;

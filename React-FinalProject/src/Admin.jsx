import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from './Redux/Action';

function Admin() {
  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [img, setImg] = useState('');
  const [editingId, setEditingId] = useState(null); 
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  const handleAddOrEditMovie = () => {
    if (editingId) {
      const updatedMovie = {
        id: editingId,
        name,
        director,
        img,
      };

      dispatch(removeFromWatchlist(editingId));
      dispatch(addToWatchlist(updatedMovie));
    } else {
      const newMovie = {
        id: watchlist.length + 1,
        name,
        director,
        img,
      };

      dispatch(addToWatchlist(newMovie));
    }

    setName('');
    setDirector('');
    setImg('');
    setEditingId(null);
  };

  const handleEdit = (movie) => {
    setName(movie.name);
    setDirector(movie.director);
    setImg(movie.img);
    setEditingId(movie.id);
  };

  return (
    <div>
      <h1 className='mt-[100px] text-[30px] font-bold text-center'>Add Movies from Heare</h1>
      <div className='flex justify-evenly mt-[20px]'>
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-[25%] border bg-black text-white rounded-[10px] ps-[10px] h-[40px]'
        />
        <input
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className='w-[25%] border bg-black text-white rounded-[10px] ps-[10px] h-[40px]'
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className='w-[25%] border bg-black text-white rounded-[10px] ps-[10px] h-[40px]'
        />
        <button onClick={handleAddOrEditMovie} className='w-[200px] h-[40px] bg-[#DC2626] text-white rounded-[10px] font-bold text-[15px]'>
          {editingId ? 'Update Movie' : 'Add Movie'}
        </button>
      </div>

      <h2 className='text-[25px] text-center font-bold my-[30px]'>Added Movies</h2>
      <div className='w-[90%] ms-[5%] border border-[black] mb-[20px]'></div>
      <div className="flex flex-wrap justify-evenly">
        {watchlist.map((movie) => (
          <div key={movie.id} className="w-[23%] p-4 relative group flex flex-col justify-center items-center py-[30px] my-[20px] rounded-[10px]">
            <img src={movie.img} alt={movie.name} className="w-[200px] h-[300px] object-cover transition-opacity duration-300 rounded-[10px]" />
            <h2>{movie.name}</h2>
            <p>Director : {movie.director}</p>
            <p>IMDB : {movie.rating}</p>
            <button onClick={() => handleEdit(movie)}className="bg-green-500 w-[150px] rounded-[5px] text-white p-2 mt-2">Edit</button>
            <button onClick={() => dispatch(removeFromWatchlist(movie.id))} className="bg-red-500 w-[150px] rounded-[5px] text-white p-2 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;

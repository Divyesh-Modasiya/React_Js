import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import movieData from '../movies.json';
import { addToWatchlist } from './Redux/Action';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setMovies(movieData);
  }, []);

  const handleAddToWatchlist = (movie) => {
    dispatch(addToWatchlist(movie));
    alert("Add To WatchList ?")
  };

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex mb-4 w-full justify-center mt-[100px]">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-[black] bg-black text-white rounded-[10px] mt-[15px] w-[40%]"
        />
      </div>

      <div className="flex flex-wrap justify-evenly">
        {(filteredMovies.length > 0 ? filteredMovies : movies).map((el) => (
          <div data-aos="fade-up" key={el.id} className="w-[23%] p-4 relative group flex flex-col justify-center items-center py-[30px] my-[20px] rounded-[10px]">
            <img
              src={el.img}
              alt="not available"
              className="w-[200px] h-[300px] object-cover transition-opacity duration-300 rounded-[10px]"
            />
            <button
              onClick={() => handleAddToWatchlist(el)}
              className="absolute inset-0 bg-black bg-opacity-40 rounded-[20px] text-white font-bold  opacity-0 underline-offset-2	 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
            >
             + Add to Watchlist
            </button>
            <h1 className="text-xl font-semibold mt-2">{el.name}</h1>
            <h1 className="text-sm text-gray-600">Director: {el.director}</h1>
            <h1 className="text-sm text-gray-600">IMDB: {el.rating}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

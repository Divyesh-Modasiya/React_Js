
const initialState = {
    watchlist: JSON.parse(localStorage.getItem('watchlist')) || [],
  };
  
  const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WATCHLIST':
        const movieExists = state.watchlist.some((movie) => movie.id === action.payload.id);
        if (movieExists) {
          return state;
        }
        const newState = {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
        localStorage.setItem('watchlist', JSON.stringify(newState.watchlist));
        return newState;
  
      case 'REMOVE_FROM_WATCHLIST':
        const updatedWatchlist = state.watchlist.filter(movie => movie.id !== action.payload);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        return {
          ...state,
          watchlist: updatedWatchlist,
        };
      default:
        return state;
    }
  };
  
  export default watchlistReducer;
  
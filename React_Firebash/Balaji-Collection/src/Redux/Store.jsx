import { configureStore } from '@reduxjs/toolkit';
import bookedProductsReducer from './Reducer';

export const store = configureStore({
  reducer: {
    bookedProducts: bookedProductsReducer,
  },
});

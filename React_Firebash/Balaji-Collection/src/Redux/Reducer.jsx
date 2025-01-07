import { createSlice } from '@reduxjs/toolkit';

const bookedProductsSlice = createSlice({
  name: 'bookedProducts',
  initialState: [],
  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload);  // Add new booking to the list
    },
  },
});

export const { addBooking } = bookedProductsSlice.actions;

export const selectBookedProducts = (state) => state.bookedProducts;

export default bookedProductsSlice.reducer;

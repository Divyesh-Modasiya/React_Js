import React, { memo } from 'react';

const BookedItem = memo(({ booking, handleDelete }) => (

  <div className="main w-full flex flex-wrap">
      <div className="booked-item w-[23%] border border-black">
    <img
      src={booking.imageUrl}
      alt="Selected Item"
      style={{ width: '100px', height: '100px' }}
    />
    <p><strong>Selected Item:</strong> {booking.selectedItem}</p>
    <p><strong>Color:</strong> {booking.color}</p>
    <p><strong>Product Number:</strong> {booking.description}</p>
    <p><strong>Customer Name:</strong> {booking.customerName}</p>
    <p><strong>Customer Mobile:</strong> {booking.customerMobile}</p>
    <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
    <p><strong>Return Date:</strong> {booking.returnDate}</p>

    <button onClick={() => handleDelete(booking.id)}>Delete</button>
  </div>
  </div>
  
));

export default BookedItem;

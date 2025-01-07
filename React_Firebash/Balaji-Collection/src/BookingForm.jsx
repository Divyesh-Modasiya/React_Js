import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBooking } from './Redux/Reducer';
import { db } from './firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const BookingForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      imageUrl,
      selectedItem,
      color,
      description,
      customerName,
      customerMobile,
      bookingDate,
      returnDate,
    };

    // Save to Redux
    dispatch(addBooking(bookingData));

    // Save to Firebase
    try {
      await addDoc(collection(db, 'bookings'), bookingData);
      console.log('Booking added to Firestore!');
    } catch (error) {
      console.error('Error adding booking to Firestore: ', error);
    }

    // Format customer mobile number for WhatsApp (remove non-numeric characters)
    // const formattedMobile = customerMobile.replace(/\D/g, '');

   
    navigate('/booked');
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex justify-center'>
      <div className='w-[40%] h-[95vh] border border-black flex flex-col justify-evenly my-[50px] rounded-[20px]'>
      

      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Select Item <span className='px-[20px]'>:-</span></label> */}
        <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black text-center' >
          <option value="">--Select Item--</option>
          <option value="Classic Black Sherwani">Classic Black Sherwani</option>
          <option value="Royal Blue Sherwani">Royal Blue Sherwani</option>
          <option value="Golden Wedding Sherwani">Golden Wedding Sherwani</option>
          <option value="Formal Navy Blue Suit">Formal Navy Blue Suit</option>
          <option value="Classic Grey 3-Piece Suit">Classic Grey 3-Piece Suit</option>
        </select>
      </div>

      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Color <span className='px-[20px]'>:-</span></label> */}
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color"
          className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black ps-[10px] outline-none'
        />
      </div>

      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Product Number <span className='px-[20px]'>:-</span></label> */}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Product Number"
          className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black ps-[10px] outline-none'
        />
      </div>
      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Customer Name <span className='px-[20px]'>:-</span></label> */}
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter customer name"
          className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black ps-[10px] outline-none'
        />
      </div>

      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Mobile Number <span className='px-[20px]'>:-</span></label> */}
        <input
          type="tel"
          value={customerMobile}
          onChange={(e) => setCustomerMobile(e.target.value)}
          placeholder="Enter mobile number"
          className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black ps-[10px] outline-none'
        />
      </div>
      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Booking Date <span className='px-[20px]'>:-</span></label> */}
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black ps-[10px] outline-none'
        />
      </div>

      <div className='w-full flex justify-center items-center py-[10px]'>
        {/* <label>Return Date <span className='px-[20px]'>:-</span></label> */}
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className='w-[80%] h-[40px] rounded-[5px] border-[1px] border-black ps-[10px] outline-none'
        />
      </div>

     
      <div className='w-full flex justify-center items-center py-[10px] relative'>
        {/* <label>Select Image <span className='px-[20px]'>:-</span> </label> */}
        <input type="file" accept="image/*" className='w-[80%] flex  items-center h-[40px] rounded-[5px] border-[1px] border-black text-center outline-none' onChange={handleImageChange} />
        {imageUrl && <img src={imageUrl} alt="Selected" style={{ width: '30px', height: '30px', marginTop: '10px', position:'absolute', bottom:'0', right:'10px' }} />}
      </div>
    <div className='w-full flex justify-center'>
    <button type="submit" className='w-[40%] h-[40px] bg-black rounded-[5px] text-white my-[10px]'>Submit Booking</button>
    </div>
      </div>
      
    </form>
  );
};

export default BookingForm;

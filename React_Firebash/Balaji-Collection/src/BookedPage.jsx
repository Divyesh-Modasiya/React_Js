import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { ClipLoader } from 'react-spinners';
import { format, isBefore } from 'date-fns';
import BookedItem from './BookedItem';
// import BookedItem from './BookedItem'; // Optimized item component

const BookedPage = () => {
  const [bookedProducts, setBookedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bookings'));
        const bookings = querySnapshot.docs.map((doc) => ({
          id: doc.id,  
          ...doc.data(),
        }));
        setBookedProducts(bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    setBookedProducts((prevProducts) => prevProducts.filter((item) => item.id !== id));

    try {
      await deleteDoc(doc(db, 'bookings', id));
      console.log('Booking deleted successfully');
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const filteredBookings = bookedProducts.filter((booking) => 
    booking.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ClipLoader color={'#123abc'} loading={loading} size={50} />
      </div>
    );
  }

  if (bookedProducts.length === 0) {
    return <div>No bookings available.</div>;
  }

  return (
    <div>
      <h2>All Booked Products</h2>

      <div>
        <input
          type="text"
          placeholder="Search by Product Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="booked-products">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <BookedItem key={booking.id} booking={booking} handleDelete={handleDelete} />
          ))
        ) : (
          <p>No products found with the given Product Number.</p>
        )}
      </div>
    </div>
  );
};

export default BookedPage;

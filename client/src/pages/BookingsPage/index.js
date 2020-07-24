import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

import api from '../../services/api';
import Booking from '../../components/Booking';
const BookingsPage = () => {
  const userContext = useContext(UserContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/booking', {
          headers: {
            authorization: `Bearer ${userContext.user}`,
          },
        });
        setBookings(response.data.data.bookings);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userContext.user]);

  return (
    <div>
      {bookings.map((booking) => (
        <Booking key={booking.id} booking={booking}></Booking>
      ))}
    </div>
  );
};

export default BookingsPage;

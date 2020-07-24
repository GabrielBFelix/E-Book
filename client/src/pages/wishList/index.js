import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

const WishList = () => {
  const userContext = useContext(UserContext);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/user/wishlist', {
        headers: { authorization: `Bearer ${userContext.user}` },
      });
      console.log(response);
    }
    fetchData();
  }, []);
  return <div>Testando</div>;
};

export default WishList;

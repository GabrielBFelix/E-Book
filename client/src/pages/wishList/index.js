import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const WishList = () => {
  const userContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [reload, setReload] = useState(false);
  const [wishList, setWishList] = useState([]);

  const removeFromWishListHandler = async (id) => {
    console.log(id)

    try {
      await api.post('/user/wishlist/delete', {item : id}, {
        headers: {
          authorization: `Bearer ${userContext.user}`,
        },
      });

      setReload((state) => !state);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/user/wishlist', {
          headers: { authorization: `Bearer ${userContext.user}` },
        });
        console.log(response.data);
        setWishList(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error.response);
      }
    })();
  }, [reload])
  return (
    <Container>
      {isLoading ? (
        <Spinner></Spinner>
      ) : hasError ? (
        <p>{hasError}</p>
      ) : (
        wishList.map((wish) => (
          <div style={{ display: 'block', textDecoration: 'none', border: '1px solid #000', padding: '10px' }}>
            <Link to={`/books/${wish.id}`} style={{ display: 'block', textDecoration: 'none', padding: '10px' }}>
              <Row style={{ margin: '10px' }}>
                <Col> Livro : {wish.name}</Col>
                <Col>Price : {wish.name}</Col>
              </Row>
              <Row style={{ margin: '10px' }}>
                <Col>Genre : {wish.genre}</Col>
              </Row>
            </Link>

            <Row style={{ margin: '10px' }}>
              <Col>
                <Button onClick={() => removeFromWishListHandler(wish.id)}>Remove from wishlit</Button>
              </Col>
            </Row>
          </div>
        ))
      )}
      {}
    </Container>
  );
};

export default WishList;

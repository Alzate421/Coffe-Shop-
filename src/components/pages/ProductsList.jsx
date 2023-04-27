import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import productsData from '../../json/productsData.json';

function ProductsList() {
  const products = productsData.products;

  return (
    <Container>
      <h2 className="mb-4">Our Products</h2>
      <ListGroup>
        {products.map(product => (
          <ListGroupItem key={product.id} className="d-flex justify-content-between align-items-center">
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <h4>${product.price.toFixed(2)}</h4>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ProductsList;

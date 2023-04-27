import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import ordersData from '../../json/ordersData.json';
import productsData from '../../json/productsData.json';

function Cashier() {
  return (
    <Card>
      <Card.Header as="h2">Cashier</Card.Header>
      <ListGroup variant="flush">
       
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span>{}</span>
            <div>
              <Button variant="outline-secondary" size="sm" className="mx-1" onClick={() => removeProductFromOrder()}>-</Button>
              <span>{}</span>
              <Button variant="outline-secondary" size="sm" className="mx-1" onClick={() => addProductToOrder()}>+</Button>
            </div>
          </ListGroup.Item>
        
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <span>Total:</span>
          <span>${}</span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <Button variant="primary" >Pay</Button>
      </Card.Footer>
    </Card>
  );
}

export default Cashier;

import React, { useState } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import ordersData from '../../json/ordersData.json';

function OrdersList() {
  const [orders, setOrders] = useState(ordersData.orders);

  const handleAddOrder = () => {
    // Lógica para agregar una nueva orden
  };

  const calculateTotalPrice = order => {
    // Lógica para calcular el precio total de una orden
  };

  const renderOrderItems = order => {
    // Lógica para mostrar los items de una orden
  };

  return (
    <Container> {/* Envolver todo el contenido en un Container */}
      <h2>Orders</h2>
      <ListGroup>
        {orders.map(order => (
          <ListGroupItem key={order.id}>
            <h3>{order.customerName}</h3>
            <ul>
              {order.items.map(item => (
                <li key={item.productId}>
                  <p>Product ID: {item.productId}</p>
                  <p>Quantity: {item.quantity}</p>
                </li>
              ))}
            </ul>
            <p>Total Price: ${order.totalPrice}</p>
          </ListGroupItem>
        ))}
      </ListGroup><br />
      <Button onClick={handleAddOrder}>Add Order</Button> {/* Agregar clase personalizada al botón */}
    </Container>
  );
}

export default OrdersList;

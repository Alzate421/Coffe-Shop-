import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="title">Welcome to Café de la Montaña</h1>
            <p className="subtitle lead">We offer a wide variety of coffee drinks, including:</p>
            <ul className="list">
              <li>Latte</li>
              <li>Cappuccino</li>
              <li>Americano</li>
              <li>Iced Coffee</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className="schedule">Schedule</h2>
            <p className="description">Open every day from 8:00 AM to 6:00 PM</p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className="location">Location</h2>
            <p className="description">We are located on the main street of the city, right in the shopping center. Come visit us!</p>
            <Button variant="dark" href="/products">View Full Menu</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

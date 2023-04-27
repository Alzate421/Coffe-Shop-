import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="mt-5 bg-dark text-light">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: info@cafemontana.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Are you looking for a quiet place to work or study? Our cafeteria offers free Wi-Fi and a cozy atmosphere so you can concentrate while enjoying a freshly brewed coffee and a delicious cake.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

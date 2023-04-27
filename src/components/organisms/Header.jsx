import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css';

import MainTitle from '../atoms/MainTitle';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-style">
      <Container>
        {/* <Navbar.Brand>Café de la Montaña</Navbar.Brand> */}
        <MainTitle title={"Café de la Montaña"} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <Link to="/products" className="dropdown-item">Products</Link>
              <Link to="/customers" className="dropdown-item">Employees</Link>
              <Link to="/orders" className="dropdown-item">Orders</Link>
              <NavDropdown.Divider />
              <Link to="/cashier" className="dropdown-item">Cashier</Link>
              <Link to="/reports" className="dropdown-item">Reports</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

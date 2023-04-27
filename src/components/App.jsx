import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './organisms/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './organisms/Footer';

import ProductsList from './pages/ProductsList';
import EmployeeList from './pages/EmployeeList';
import OrdersList from './pages/OrdersList';
import Cashier from './pages/Cashier';
import Reports from './pages/Reports';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='products' element={<ProductsList />}></Route>
        <Route path='customers' element={<EmployeeList />}></Route>
        <Route path='orders' element={<OrdersList />}></Route>
        <Route path='cashier' element={<Cashier />}></Route>
        <Route path='reports' element={<Reports />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

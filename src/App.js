import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import CustomerForm from './components/CustomerForm.js';
import CustomerList from './components/CustomerList.js';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<CustomerForm />} />
          <Route path="/customer-list" element={<CustomerList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

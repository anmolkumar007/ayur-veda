//import logo from './logo.svg';
import './App.css';
import React from 'react';

import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customer from './Components/Customer';
import Admin from './Components/Admin';
import Register from './Components/Register';
import AddMed from './Components/AddMedicine';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/customer/dashboard' element={<Customer />} />
          <Route path='/admin/dashboard' element={<Admin />} />
          <Route path='medicine/add' element={<AddMed />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

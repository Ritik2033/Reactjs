import React from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';

import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';
import Farmer from '../src/components/Farmer';
import Sidebar from './components/Sidebar';

import Screen  from './components/Screen';

import Farm from '../src/components/Farm';
import Screenone from './components/Screenone';
import Screentwo from './components/Screentwo';
import Piechart from './components/Piechart';
import Projectdetails from './components/Projectdetails';




function App() {
  const navigate = useNavigate();

  return (
    <Routes>
     
      <Route path="/" element={<Login />} />

      
      <Route path="/dashboard" element={<Dashboard />} />

     
      <Route path="/navbar" element={<Sidebar/>} />

      <Route path="/farmer" element={<Farmer/>} />
      <Route path="/home" element={<Screen/>} />

      <Route path="/farm" element={<Farm/>} />

      <Route path="/screenone" element={<Screenone/>} />
      <Route path="/screentwo" element={<Screentwo/>} />

      <Route path="/Piechart" element={<Piechart/>} />

      <Route path="/Projectdetails" element={<Projectdetails/>} />

     

      

      
      

     
      
      
      <Route
        path="/"
        element={<Outlet />}
        onEnter={() => {
          navigate('/login');
        }}
      />
    </Routes>
  );
}

export default App;

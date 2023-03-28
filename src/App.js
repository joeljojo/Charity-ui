import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css';
import SignUp from './Components/Register/SignUp';
import AdminDonorDashboard from './Components/Dashboards/AdminDonorDashboard';
import ChildrensHome from './Components/Dashboards/ChildrensHome';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="userdashboard" element={<ChildrensHome />} />
        <Route path="admindonordashboard" element={<AdminDonorDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

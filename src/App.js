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
        <Route exact path="/" Component={Home} />
        <Route path="signin" Component={Login} />
        <Route path="signup" Component={SignUp} />
        <Route path="userdashboard" Component={ChildrensHome} />
        <Route path="admindonordashboard" Component={AdminDonorDashboard} />
      </Routes>
    </div>
  );
}

export default App;

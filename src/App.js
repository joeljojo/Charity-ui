import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css';
import SignUp from './Components/Register/SignUp';
import AdminDonorDashboard from './Components/Dashboards/AdminDonorDashboard';
import ChildrensHome from './Components/Dashboards/ChildrensHome';
import Home from './Components/Home/Home';
import MakeRequest from './Components/MakeRequest/MakeRequest';
import Payout from './Components/MakePayment/Payout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="signin" Component={Login} />
        <Route path="signup" Component={SignUp} />
        <Route path="userdashboard" Component={ChildrensHome} />
        <Route path="admindonordashboard" Component={AdminDonorDashboard} />
        <Route path="make-request" Component={MakeRequest} />
        <Route path="checkout" Component={Payout} />
      </Routes>
    </div>
  );
}

export default App;

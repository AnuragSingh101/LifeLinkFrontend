// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navBar';
import HomePage from './Components/Pages/homePage';
import About from './Components/Pages/About';
import Campaign from './Components/Pages/Campaign';
import Inventory from './Components/Pages/Inventory';
import Register from './Components/Auth/register';
import Login from './Components/Auth/login';
// import AdminProtectedRoute from './Components/ProtectedRoutes/AdminProtectedRoute';
import UserProtectedRoute from './Components/ProtectedRoutes/UserProtectedRoute';
import Dashboard from './Components/DashBoard/AdminDashboard';
import UserDashboard from './Components/DashBoard/UserDashboard';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="campaign" element={<Campaign />} /> */}
          {/* <Route path="inventory" element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
            } /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard Route */}
          <Route path="/admin-dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}>
          {/* Nested routes for different components inside the dashboard */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="about" element={<About />} />
        </Route>
          <Route path="/user-dashboard" element={
            <UserProtectedRoute>
              <UserDashboard />
            </UserProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
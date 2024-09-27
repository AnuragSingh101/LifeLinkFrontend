// src/Components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Check for token in localStorage
  if (!token) {
    // If no token is found, redirect to login
    return <Navigate to="/login" />;
  }

  // If token exists, render the protected children components
  return children;
};


// exported the protected route function 
export default ProtectedRoute;

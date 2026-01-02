/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { MOCK_USER } from '../data/authMocks'; 

const AuthContext = createContext(null);

// Custom Hook for consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  // Mock login function (takes only email for mock purposes)
  const login = (email) => {
    
    if (email === MOCK_USER.admin.email) {
      setUser(MOCK_USER.admin);
      return true;
    } else if (email === MOCK_USER.instructor.email) {
      setUser(MOCK_USER.instructor);
      return true;
    } else if (email === MOCK_USER.student.email) {
      setUser(MOCK_USER.student);
      return true;
    }
    
    setUser(null);
    return false;
  };

  const logout = () => {
    setUser(null);
  };
  
  const role = user ? user.role : 'guest';

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
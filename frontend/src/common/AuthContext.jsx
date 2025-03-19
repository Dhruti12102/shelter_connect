// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to hold the user information
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load user data from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call (replace with your actual API endpoint)
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update state with user data and token
        setUser(data.user);
        setToken(data.token);

        // Store user data and token in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Clear user data and token from state
    setUser(null);
    setToken(null);

    // Remove user data and token from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Context value to be provided to children
  const contextValue = {
    user,
    token,
    login,
    logout,
    isLoading,
    error,
    setUser, // Optionally expose setUser to update user info
    setToken, // Optionally expose setToken to update token
  };

  // Provide the AuthContext to children components
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

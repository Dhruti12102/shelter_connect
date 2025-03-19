// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/styles.css'
import './index.css'
import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Register /> */}
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

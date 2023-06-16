import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import Login from './components/Login';
import Launch from './components/Launch';
import Topics from './components/customer/Topics';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Launch></Launch>
  </BrowserRouter>
);

// root.render(<Topics></Topics>)
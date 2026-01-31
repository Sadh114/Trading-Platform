import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);



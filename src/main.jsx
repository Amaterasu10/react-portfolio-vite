import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)

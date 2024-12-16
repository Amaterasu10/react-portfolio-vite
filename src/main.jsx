import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
// import Home from './sections/Home';
// import Contact from './sections/Contact';
// import About from './sections/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

import './index.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter> */}
</React.StrictMode>
)

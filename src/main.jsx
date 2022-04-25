import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import Home from './routes/Home';
import About from './routes/About';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)

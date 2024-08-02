import React from 'react';
import ReactDOM from 'react-dom/client';

import '@telegram-apps/telegram-ui/dist/styles.css';

import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/tg_shop">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

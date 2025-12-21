
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

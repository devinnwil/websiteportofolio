import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure the root element exists
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root element not found');
}

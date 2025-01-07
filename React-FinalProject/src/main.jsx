import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from React 18
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/Store';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root for React 18

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

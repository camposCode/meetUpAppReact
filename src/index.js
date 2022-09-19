import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { FavoritescontextProvider } from './store/favorites-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritescontextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </FavoritescontextProvider>
);


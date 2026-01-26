
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const mountNode = document.getElementById('root');

if (mountNode) {
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Erro fatal: Elemento #root não encontrado no DOM.");
}

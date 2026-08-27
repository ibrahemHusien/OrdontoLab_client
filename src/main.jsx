import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import './index.css'


const currentPath = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {}
    {currentPath === '/admin' ? <Admin /> : <App />}
  </React.StrictMode>,
)
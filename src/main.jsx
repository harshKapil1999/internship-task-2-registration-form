import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Dashboard from './Dashboard.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
          <Route index path='dashboard' element={<Dashboard />} />
          
        
        
      </Routes>
    </BrowserRouter>
   </React.StrictMode>
  
)

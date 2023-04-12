import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline } from '@mui/material'
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
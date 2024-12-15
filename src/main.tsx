import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Topbar from './topbar/Topbar.tsx'

createRoot(document.getElementById('content')!).render(
  <StrictMode>
    <Topbar />
    <App />
  </StrictMode>,
)

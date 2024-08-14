import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='font-lato text-4xl text-red-700 '>Welcome to the productHub</h1>
  </StrictMode>,
)

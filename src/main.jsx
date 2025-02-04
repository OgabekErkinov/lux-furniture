import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providers from './provider/Providers.jsx'

createRoot(document.getElementById('root')).render(
  <Providers>
    <App root = {document.getElementById('root')} />
  </Providers>
 
)

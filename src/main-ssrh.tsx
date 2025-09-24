import React from 'react'
import ReactDOM from 'react-dom/client'
import AppSSRH from './App-ssrh.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppSSRH />
  </React.StrictMode>,
)
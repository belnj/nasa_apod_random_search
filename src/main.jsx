import React from 'react'
import ReactDOM from 'react-dom/client'
import { NasaAPODApp } from './NasaAPODApp'
import './styles.css'

//// React.StrictMode -> This is only for dev 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <NasaAPODApp />
  </React.StrictMode>,
)

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <div className='sm:px-25 sm:py-10 px-5 py-5 relative'>
    
    <App />
      </div>
      </Provider>
   
  </StrictMode>
)

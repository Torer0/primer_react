import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counters from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Counters />
  </React.StrictMode>,
)



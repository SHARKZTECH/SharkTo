import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {TransactionsProvider} from "./context/TransactionContex"

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
      <React.StrictMode>
    <App />
  </React.StrictMode>
    </TransactionsProvider>
)

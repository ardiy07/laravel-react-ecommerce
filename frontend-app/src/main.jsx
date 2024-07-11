import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import stores from './services/store'
import './assets/css/tailwinds.css'
import './assets/css/icons.css'
import './assets/css/index.css'
import ErrorBundary from './utils/errorBundary.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={stores}>
      <ErrorBundary>
        <App />
      </ErrorBundary>
    </Provider>
  </React.StrictMode>,
)

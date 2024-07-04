import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import stores from './store/store'
import './index.css'
import './assets/style/icons.css'
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

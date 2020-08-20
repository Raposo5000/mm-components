import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './main/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './main/rootReducer'

const STORE = createStore(rootReducer)

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root')
)

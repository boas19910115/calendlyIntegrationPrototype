import React from 'react'
import 'services/firebase'
import 'services/microsoft'
import 'services/microsoft/calendar'
import ReactDOM from 'react-dom'
import './index.scss'
import store from 'reduxStore'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  <Main />,

  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// Polyfill
import 'babel-polyfill'

// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
// import createBrowserHistory from 'history/lib/createBrowserHistory'

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app'

// Base styling
import './index.css'

// Render the app
import App from './app'
ReactDOM.render(<App />, document.getElementById(DOM_APP_EL_ID))

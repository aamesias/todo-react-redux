import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { Route, Switch } from 'react-router'
// import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import App from './components/App'
import './index.css'


render (
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

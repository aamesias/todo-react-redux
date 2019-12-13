import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store';
import App from './components/App'
import './index.css';
import './store.js'

const store = configureStore()

render (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" render={() => (<App/>)} />
            </Switch>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
)

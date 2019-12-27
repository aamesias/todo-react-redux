import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AppHeader from './AppHeader'
import TodoList from './TodoList'
import FilterFooter from './FilterFooter'

const App = () => {
    return (
        <Router>
            <AppHeader />
            <Switch>
                <Redirect exact from="/" to="/all" />
                <Route path="/:filter?" render={match => (
                    <React.Fragment>
                        <TodoList {...match} />
                        <FilterFooter {...match} />
                    </React.Fragment>
                )} />
            </Switch>
        </Router>
    )
}

export default App
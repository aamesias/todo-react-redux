import React, { Component } from 'react'

import AppHeader from './AppHeader'
import TodoList from './TodoList'
import FilterFooter from './FilterFooter'

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppHeader/>
                <TodoList />
                <FilterFooter />
            </React.Fragment>
        )
    }
}
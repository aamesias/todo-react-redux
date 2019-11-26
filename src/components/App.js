import React from 'react';
import AppHeader from './AppHeader'
import TodoList from './TodoList'
import FilterFooter from './FilterFooter'

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppHeader />
                <TodoList />
                <FilterFooter />
            </React.Fragment>
        )
    }
}
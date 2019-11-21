import React from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='center'>Todos</h1>
                <AddTodo />
                <TodoList />
            </React.Fragment>
        )
    }
}
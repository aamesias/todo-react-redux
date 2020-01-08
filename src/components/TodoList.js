import React from 'react'
import { useSelector } from 'react-redux'
// import { deleteTodo, toggleTodo, setFilter } from '../actions/actionCreators'
import TodoItem from './TodoItem'
import { List } from 'antd'
// import PropTypes from 'prop-types'

const TodoList = (myProps) => {
    const { filter } = myProps.match.params
    const [editTodoId, setEditTodoId] = React.useState('')
    const updateEditTodoId = todoId => setEditTodoId(todoId)
    //const filter = useSelector(myProps => myProps.match.params)

    const todos = useSelector(state => state.todos)
    const filteredTodos = useSelector(state => visibleTodos(state.todos, filter))

    let message = ''
    if (filter === 'completed') {
        message = 'No todos completed. 😢'
    } else if (filter === 'active') {
        message = 'All todos are done! 🥳'
    }

    if (todos.length === 0) return null

    if (filteredTodos.length === 0) {
        return (
            <div className='container todo-row'>
                <List bordered>
                    <List.Item className='empty-list'>
                        {message}
                    </List.Item>
                </List>
            </div>
        )
    } else {
        return (
            <div className='container todo-row'>
                <List bordered>
                    {filteredTodos.map((todo) => (
                        <List.Item key={todo.todoId}>
                            <TodoItem
                                updateEditTodoId={updateEditTodoId}
                                editTodoId={editTodoId}
                                item={todo}
                            // toggleTodo={() => dispatch(toggleTodo)}
                            // deleteTodo={() => dispatch(deleteTodo)}
                            // setFilter={() => dispatch(setFilter)}
                            />
                        </List.Item>
                    ))}
                </List>
            </div>
        )
    }
}

export default TodoList

// TodoList.propTypes = {
//     todos: PropTypes.array.isRequired,
//     filteredTodos: PropTypes.array.isRequired,
//     toggleTodo: PropTypes.func.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
// }

const visibleTodos = (todos, filter) => {
    if (filter === 'completed') {
        return todos.filter(todo => !todo.isActive)
    } else if (filter === 'active') {
        return todos.filter(todo => todo.isActive)
    } else {
        return todos
    }
}

// const mapStateToProps = (state, myProps) => {
//     const { filter } = myProps.match.params
//     return {
//         todos: state.todos,
//         filteredTodos: visibleTodos(state.todos, filter),
//         filter: filter,
//     }
// }

// const mapDispatchToProps = {
//     deleteTodo,
//     toggleTodo,
//     setFilter,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
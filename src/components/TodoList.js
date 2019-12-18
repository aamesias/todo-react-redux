import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo, setFilter } from '../actions/actionCreators'
import TodoItem from './TodoItem'
import { List } from 'antd'
import PropTypes from 'prop-types'

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editTodoId: -1,
        }

        this.updateEditTodoId = this.updateEditTodoId.bind(this);
    }

    updateEditTodoId(todoId) {
        this.setState({
            editTodoId: todoId,
        })
    }

    render() {
        const { todos, filter, filteredTodos, toggleTodo, deleteTodo, match } = this.props;


        console.log("url: ", match)

        let message = ''
        if (filter === 'completed') {
            message = 'No todos completed. 😢'
        } else if (filter === 'active') {
            message = 'All todos are done! 🥳'
        }

        if (todos.length === 0) {
            return null;
        }

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
                                    updateEditTodoId={this.updateEditTodoId}
                                    editTodoId={this.state.editTodoId}
                                    item={todo}
                                    toggleTodo={toggleTodo}
                                    deleteTodo={deleteTodo}
                                    setFilter={setFilter}
                                />
                            </List.Item>
                        ))}
                    </List>
                </div>
            )
        }
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    filteredTodos: PropTypes.array.isRequired,
    // pathname: PropTypes.string.isRequired, 
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

function visibleTodos(todos, filter) {
    if (filter === 'completed') {
        return todos.filter((todo) => todo.isActive === false)
    } else if (filter === 'active') {
        return todos.filter((todo) => todo.isActive === true)
    } else {
        return todos
    }
}

function mapStateToProps(state, myProps) {
    const { filter } = myProps.match.params
    return {
        todos: state.todos,
        filteredTodos: visibleTodos(state.todos, filter),
        filter: filter,
        // pathname: state.router.location.pathname.slice(1)
    }
}

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo,
    setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
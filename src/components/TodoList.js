import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/actionCreators'
import { Icon, Checkbox, List, Input, Typography, Row, Col } from 'antd';

function Item({ item, toggleTodo, deleteTodo }) {
    if(false) {
        // edit todo
        return (
            <Input />
        )
    } else {
        return (
            <Row className='todo-row' type='flex' justify='center' align='bottom'>
                <Col span={2}>
                    <Checkbox
                        checked={!item.isActive}
                        onChange={ () => {toggleTodo(item.todoId)} }
                    />
                </Col>
                <Col span={21}>
                    <Typography.Text
                        //onDoubleClick={ () => {console.log('Create action EDIT_TODO')} }
                        style={{ textDecoration: item.isActive ? 'none' : 'line-through' }}
                    >
                        {item.text}
                    </Typography.Text>
                </Col>
                <Col span={1}>
                    <Icon className='delete-btn' type="delete" theme="twoTone" twoToneColor="#ff2f96"
                        onClick={ () => {deleteTodo(item.todoId)} }
                    />
                </Col>
            </Row>
        )
    }
}


function TodoList({ todos, filter, toggleTodo, deleteTodo }) {

    // returns the correct filtered todos depending on the current filter
    let filteredTodos = todos
    let message = ''
    if (filter === 'completed') {
        filteredTodos = todos.filter((todo) => todo.isActive === false)
        message = 'No todos completed. 😢'
    } else if (filter === 'active') {
        filteredTodos = todos.filter((todo) => todo.isActive === true)
        message = 'All todos are done! 🥳'
    }

    if (todos.length === 0) {
        return null;
    } 

    if(filteredTodos.length === 0) {
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
                            <Item 
                                item = {todo}
                                toggleTodo = {toggleTodo}
                                deleteTodo = {deleteTodo}
                            />
                        </List.Item>
                    ))}
                </List>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter,
    }
}

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
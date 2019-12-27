import React from 'react'
import EditTodo from './EditTodo'
import { Icon, Checkbox, Typography, Row, Col } from 'antd'
import PropTypes from 'prop-types'

const TodoItem = ({ item, toggleTodo, deleteTodo, updateEditTodoId, editTodoId }) => {
    if (editTodoId === item.todoId) {
        return (
            <EditTodo
                todo={item}
                updateEditTodoId={updateEditTodoId}
            />
        )
    } else {
        return (
            <Row className='todo-row' type='flex' justify='center' align='bottom'>
                <Col span={2}>
                    <Checkbox
                        checked={!item.isActive}
                        onChange={() => toggleTodo(item.todoId)}
                    />
                </Col>
                <Col span={21}
                    onDoubleClick={() => updateEditTodoId(item.todoId)}
                >
                    <Typography.Text
                        style={{ textDecoration: item.isActive ? 'none' : 'line-through' }}
                    >
                        {item.text}
                    </Typography.Text>
                </Col>
                <Col span={1}>
                    <Icon className='delete-btn' type="delete" theme="twoTone" twoToneColor="#ff2f96"
                        onClick={() => deleteTodo(item.todoId)}
                    />
                </Col>
            </Row>
        )
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    updateEditTodoId: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodoId: PropTypes.string.isRequired,
}

export default TodoItem
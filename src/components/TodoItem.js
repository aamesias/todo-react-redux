import React from 'react'
import { useDispatch } from 'react-redux'
import EditTodo from './EditTodo'
import { deleteTodo, toggleTodo } from '../actions/actionCreators'
import { Icon, Checkbox, Typography, Row, Col } from 'antd'
import PropTypes from 'prop-types'

const TodoItem = ({ item, updateEditTodoId, editTodoId }) => {
    const dispatch = useDispatch()
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
                        onChange={() => dispatch(toggleTodo(item.todoId))}
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
                        onClick={() => dispatch(deleteTodo(item.todoId))}
                    />
                </Col>
            </Row>
        )
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    updateEditTodoId: PropTypes.func.isRequired,
    editTodoId: PropTypes.string.isRequired,
}

export default TodoItem
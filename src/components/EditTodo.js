import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input } from 'antd';
import { editTodoText, deleteTodo } from '../actions/actionCreators'
import PropTypes from 'prop-types'

const EditTodo = ({ todo, deleteTodo, editTodoText, updateEditTodoId }) => {
    const [todoText, setTodoText] = React.useState(todo.text)

    const updateInput = (e) => { setTodoText(e.target.value) }

    const handleNewText = () => {
        (!todoText.trim()) ? deleteTodo(todo.todoId) : editTodoText(todo.todoId, todoText)
        updateEditTodoId(-1)
    }

    return (
        <Row className='todo-row' type='flex' justify='space-between' align='middle'>
            <Col span={2}></Col>
            <Col span={22}>
                <Input size='small'
                    onBlur={() => handleNewText()}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleNewText();
                        }
                    }}
                    type='text'
                    autoFocus='autofocus'
                    value={todoText}
                    onChange={updateInput}
                />
            </Col>
        </Row>
    )

}

EditTodo.propTypes = {
    todo: PropTypes.object.isRequired,
    updateEditTodoId: PropTypes.func.isRequired,
    editTodoText: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

/*function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}*/

const mapDispatchToProps = {
    editTodoText,
    deleteTodo,
}

export default connect(null, mapDispatchToProps)(EditTodo);
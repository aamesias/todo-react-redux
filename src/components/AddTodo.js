import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { addTodo } from '../actions/actionCreators'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodo }) => {
    const [input, setInput] = React.useState('')

    const updateInput = e => setInput(e.target.value)

    const handleAddTodo = e => {
        if (e.key === 'Enter') {
            addTodo(input)
            setInput('')
        }
    }

    return (
        <Input
            type='text'
            placeholder='What needs to be done?'
            value={input}
            onChange={updateInput}
            onKeyDown={handleAddTodo}
        />
    )
}

AddTodo.propTypes = { addTodo: PropTypes.func.isRequired }

const mapDispatchToProps = { addTodo }

export default connect(null, mapDispatchToProps)(AddTodo);
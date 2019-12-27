import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCompleted } from '../actions/actionCreators'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const ClearCompleted = ({ numOfTodosCompleted, clearCompleted }) => {
    if (numOfTodosCompleted !== 0) {
        return (
            <Button onClick={() => clearCompleted()} >
                <Link to='/all'>Clear Completed</Link>
            </Button>
        )
    }
    else {
        return null
    }
}

ClearCompleted.propTypes = {
    numOfTodosCompleted: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ numOfTodosCompleted: state.todos.filter(todo => !todo.isActive).length })

const mapDispatchToProps = { clearCompleted }

export default connect(mapStateToProps, mapDispatchToProps)(ClearCompleted)
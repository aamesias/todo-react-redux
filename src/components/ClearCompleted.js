import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCompleted } from '../actions/actionCreators'
import { Button } from 'antd'
// import PropTypes from 'prop-types'

const ClearCompleted = () => {
    const numOfTodosCompleted = useSelector(state => state.todos.filter(todo => !todo.isActive).length)
    const dispatch = useDispatch()
    if (numOfTodosCompleted > 0) {
        return (
            <Button onClick={() => dispatch(clearCompleted())} >
                <Link to='/all'>Clear Completed</Link>
            </Button>
        )
    }
    return null
}

export default ClearCompleted

// ClearCompleted.propTypes = {
//     numOfTodosCompleted: PropTypes.number.isRequired,
//     clearCompleted: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => ({ numOfTodosCompleted: state.todos.filter(todo => !todo.isActive).length })

// const mapDispatchToProps = { clearCompleted }

// export default connect(mapStateToProps, mapDispatchToProps)(ClearCompleted)
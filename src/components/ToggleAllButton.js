import React from 'react';
import { connect } from 'react-redux'
import { toggleAll } from '../actions/actionCreators'
import { Button, Checkbox } from 'antd'
import PropTypes from 'prop-types'

const ToggleAllButton = ({ todos, toggleAll }) => {
    if (todos.length !== 0) {
        return (
            <Button className='toggle-all-button'>
                <Checkbox
                    checked={todos.filter(todo => !todo.isActive).length === todos.length}
                    onClick={() => toggleAll()}
                />
            </Button>
        )
    }
    else {
        return null;
    }
}

ToggleAllButton.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleAll: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = { toggleAll }

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAllButton);
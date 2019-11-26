import React from 'react';
import { connect } from 'react-redux';
import { toggleAll } from '../actions/actionCreators'
import { Button, Checkbox } from 'antd';

function ToggleAllButton({ todos, toggleAll }) {
    if (todos.length !== 0) {
        return (
            <Button className='toggle-all-button'>
                <Checkbox
                    checked={todos.filter((todo) => todo.isActive === false).length === todos.length}
                    onClick={() => toggleAll()}
                />
            </Button>
        )
    }
    else {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = {
    toggleAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAllButton);
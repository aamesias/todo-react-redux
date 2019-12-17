import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { addTodo } from '../actions/actionCreators'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    updateInput(e) {
        const value = e.target.value;

        this.setState({
            input: value,
        })
    }

    handleAddTodo(e) {
        if (e.key === "Enter") {
            this.props.addTodo(this.state.input);
            this.setState({
                input: '',
            })
        }
    }

    render() {
        return (
            <Input
                type='text'
                placeholder='What needs to be done?'
                value={this.state.input}
                onChange={this.updateInput}
                onKeyDown={this.handleAddTodo} 
            />
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

// state slice not needed, pass null in connect
/*function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}*/

const mapDispatchToProps = {
    addTodo,
}

export default connect(null, mapDispatchToProps)(AddTodo);
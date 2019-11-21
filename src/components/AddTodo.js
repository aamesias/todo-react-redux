import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { addTodo } from '../actions/actionCreators'

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
        if (e.keyCode === 13) {
            this.props.addTodo(this.state.input);
            this.setState({
                input: '',
            })
        }
    }

    render() {
        return (
            <div className='add-todo'>
                <Input
                    type='text'
                    placeholder='What needs to be done?'
                    value={this.state.input}
                    onChange={this.updateInput}
                    onKeyDown={this.handleAddTodo} // do redux stuff
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = {
    addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
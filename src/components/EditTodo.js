import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input} from 'antd';
import { editTodoText, deleteTodo } from '../actions/actionCreators'

class EditTodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todoText: this.props.todo.text,
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleNewText = this.handleNewText.bind(this)
    }

    updateInput(e) {
        const value = e.target.value;

        this.setState({
            todoText: value,
        })
    }

    handleNewText() {
        if(this.state.todoText === '') {
            this.props.deleteTodo(this.props.todo.todoId);
        } else {
            this.props.editTodoText(this.props.todo.todoId, this.state.todoText);
        }
        this.props.updateEditTodoId(-1); 
    }
    
    render() {
        return (
            <Row className='todo-row' type='flex' justify='space-between' align='middle'>
                <Col span={2}></Col>
                <Col span={22}>
                <Input size='small'
                        onBlur={() => this.handleNewText()}
                        onKeyDown={(e) => { 
                            if (e.key === 'Enter') {
                                this.handleNewText();
                            } 
                        }}
                        type='text'
                        autoFocus='autofocus'
                        value={this.state.todoText}
                        onChange={this.updateInput}
                    />
                </Col>
            </Row>
        )
    }
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
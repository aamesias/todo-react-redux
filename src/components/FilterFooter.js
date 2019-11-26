import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, Row, Col, Typography } from 'antd'
import { setFilter, clearCompleted } from '../actions/actionCreators'

function NumOfItemsLeft({ todos }) {
    const numOfItems = todos.filter((todo) => todo.isActive === true).length
    if (numOfItems === 1) {
        return (<Typography.Text>{numOfItems} item left</Typography.Text>)
    } else {
        return (<Typography.Text>{numOfItems} items left</Typography.Text>)
    }
}

function Filters({ setFilter }) {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['all']}>
            <Menu.Item key='all' onClick={() => { setFilter('all') }}>
                All
            </Menu.Item>
            <Menu.Item key='active' onClick={() => { setFilter('active') }}>
                Active
            </Menu.Item>
            <Menu.Item key='completed' onClick={() => { setFilter('completed') }}>
                Completed
            </Menu.Item>
        </Menu>
    )
}

function ClearCompleted({ todos, clearCompleted }) {
    const todosCompleted = todos.filter((todo) => todo.isActive === false).length
    if (todosCompleted !== 0) {
        return (
            <Button
                onClick={() => { clearCompleted() }}
            >
                Clear completed
            </Button>
        )
    }
    else {
        return null
    }
}

class FilterFooter extends React.Component {

    render() {
        if (this.props.todos.length === 0) {
            return null;
        }


        return (
            <div className='container todo-border todo-row margin white-background'>
                <Row type='flex' align='middle'>
                    <Col span={5}>
                        <NumOfItemsLeft
                            todos={this.props.todos}
                        />
                    </Col>
                    <Col span={13}>
                        <Filters
                            setFilter={this.props.setFilter}
                        />
                    </Col>
                    <Col span={6}>
                        <ClearCompleted
                            todos={this.props.todos}
                            clearCompleted={this.props.clearCompleted}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter,
    }
}

const mapDispatchToProps = {
        setFilter,
        clearCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterFooter);
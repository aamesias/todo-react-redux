import React from 'react';
import { Link } from 'react-router-dom'
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

function Filters({ setFilter, pathname }) {
    console.log(pathname)
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[pathname]}>
            <Menu.Item key='/' onClick={() => { setFilter('all') }}>
                <Link to='/'>All</Link>
            </Menu.Item>
            <Menu.Item key='/active' onClick={() => { setFilter('active') }}>
                <Link to='/active'>Active</Link>
            </Menu.Item>
            <Menu.Item key='/completed' onClick={() => { setFilter('completed') }}>
                <Link to='/completed'>Completed</Link>
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
                <Link to='/'>Clear Completed</Link>
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
                            pathname={this.props.pathname}
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
        pathname: state.router.location.pathname,
    }
}

const mapDispatchToProps = {
    setFilter,
    clearCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterFooter);
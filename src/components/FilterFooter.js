import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Button, Menu, Row, Col, Typography } from 'antd'
import { setFilter, clearCompleted } from '../actions/actionCreators'
import PropTypes from 'prop-types'

function NumOfItemsLeft({ todos }) {
    const numOfItems = todos.filter((todo) => todo.isActive === true).length
    if (numOfItems === 1) {
        return (<Typography.Text>{numOfItems} item left</Typography.Text>)
    } else {
        return (<Typography.Text>{numOfItems} items left</Typography.Text>)
    }
}

NumOfItemsLeft.propTypes = {
    todos: PropTypes.array.isRequired,
}

function Filters({ setFilter, filter }) {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[filter]}>
            <Menu.Item key='all' onClick={() => { setFilter('all') }}>
                <Link to='/all'>All</Link>
            </Menu.Item>
            <Menu.Item key='active' onClick={() => { setFilter('active') }}>
                <Link to='/active'>Active</Link>
            </Menu.Item>
            <Menu.Item key='completed' onClick={() => { setFilter('completed') }}>
                <Link to='/completed'>Completed</Link>
            </Menu.Item>
        </Menu>
    )
}

Filters.propTypes = {
    setFilter: PropTypes.func.isRequired,
    // pathname: PropTypes.string.isRequired,
}

function ClearCompleted({ todos, clearCompleted }) {
    const todosCompleted = todos.filter((todo) => todo.isActive === false).length
    if (todosCompleted !== 0) {
        return (
            <Button onClick={() => { clearCompleted() }} >
                <Link to='/all'>Clear Completed</Link>
            </Button>
        )
    }
    else {
        return null
    }
}

ClearCompleted.propTypes = {
    todos: PropTypes.array.isRequired,
    clearCompleted: PropTypes.func.isRequired,
}

class FilterFooter extends React.Component {

    render() {
        const { filter } = this.props.match.params

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
                            filter={filter}
                        //pathname={this.props.pathname}
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

FilterFooter.propTypes = {
    todos: PropTypes.array.isRequired,
    //pathname: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        // pathname: state.router.location.pathname,
    }
}

const mapDispatchToProps = {
    setFilter,
    clearCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterFooter);
import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import NumOfItemsLeft from './NumOfItemsLeft'
import FilterNav from './FilterNav'
import ClearCompleted from './ClearCompleted'
import PropTypes from 'prop-types'

const FilterFooter = ({ match, numOfAllTodos }) => {
    const { filter } = match.params

    if (numOfAllTodos === 0) return null;

    return (
        <div className='container todo-border todo-row margin white-background'>
            <Row type='flex' align='middle'>
                <Col span={5}>
                    <NumOfItemsLeft />
                </Col>
                <Col span={13}>
                    <FilterNav
                        filter={filter}
                    />
                </Col>
                <Col span={6}>
                    <ClearCompleted />
                </Col>
            </Row>
        </div>
    )
}

FilterFooter.propTypes = {
    match: PropTypes.object.isRequired,
    numOfAllTodos: PropTypes.number.isRequired
}

const mapStateToProps = state => ({ numOfAllTodos: state.todos.length })

export default connect(mapStateToProps)(FilterFooter)
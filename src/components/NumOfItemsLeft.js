import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const NumOfItemsLeft = ({ numOfItems }) => {
    if (numOfItems === 1) {
        return (<Typography.Text>{numOfItems} item left</Typography.Text>)
    } else {
        return (<Typography.Text>{numOfItems} items left</Typography.Text>)
    }
}

NumOfItemsLeft.propTypes = { numOfItems: PropTypes.number.isRequired }

const mapStateToProps = (state) => ({ numOfItems: state.todos.filter(todo => todo.isActive).length })

export default connect(mapStateToProps)(NumOfItemsLeft)
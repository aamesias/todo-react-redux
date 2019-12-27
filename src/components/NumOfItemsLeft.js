import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const NumOfItemsLeft = ({ numOfItems }) => {
    return (
        <Typography.Text>{numOfItems} item{numOfItems > 1 ? 's' : ''} left</Typography.Text>
    )
}

NumOfItemsLeft.propTypes = { numOfItems: PropTypes.number.isRequired }

const mapStateToProps = state => ({ numOfItems: state.todos.filter(todo => todo.isActive).length })

export default connect(mapStateToProps)(NumOfItemsLeft)
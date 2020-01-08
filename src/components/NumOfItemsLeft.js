import React from 'react'
import { Typography } from 'antd'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const NumOfItemsLeft = () => {
    const numOfItems = useSelector(state => state.todos.filter(todo => todo.isActive).length)
    return (
        <Typography.Text>{numOfItems} item{numOfItems > 1 ? 's' : ''} left</Typography.Text>
    )
}

export default NumOfItemsLeft

// NumOfItemsLeft.propTypes = { numOfItems: PropTypes.number.isRequired }

// const mapStateToProps = state => ({ numOfItems: state.todos.filter(todo => todo.isActive).length })

// export default connect(mapStateToProps)(NumOfItemsLeft)
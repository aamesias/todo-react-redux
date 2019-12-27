import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import PropTypes from 'prop-types'

const FilterNav = ({ filter }) => {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[filter]}>
            <Menu.Item key='all'>
                <Link to='/all'>All</Link>
            </Menu.Item>
            <Menu.Item key='active'>
                <Link to='/active'>Active</Link>
            </Menu.Item>
            <Menu.Item key='completed'>
                <Link to='/completed'>Completed</Link>
            </Menu.Item>
        </Menu>
    )
}

FilterNav.propTypes = { filter: PropTypes.string.isRequired }

export default FilterNav
import React from 'react'
import AddTodo from './AddTodo'
import ToggleAllButton from './ToggleAllButton'
import { Row, Col } from 'antd'

const AppHeader = () => {
    return (
        <React.Fragment>
            <h1 className='center'>Todos</h1>
            <div className='container margin'>
                <Row type='flex' justify='space-between'>
                    <Col span={3}>
                        <ToggleAllButton />
                    </Col>
                    <Col span={21}>
                        <AddTodo />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default AppHeader
import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import Pie from '../Charts/Pie'

class ChartCard extends Component {
    render() {
        const { icon, title } = this.props
        return(
            <Card
                title={
                    <div>
                        <Icon type={icon} />
                        <span style={{ marginLeft: 6 }}>{title}</span>
                    </div>
                }
                size="small"
                bodyStyle={{ padding: 0 }}>
                <Pie />
            </Card>
        )
    }
}

export default ChartCard
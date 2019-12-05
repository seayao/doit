import React, { Component } from 'react'
import { Row, Col, Timeline } from 'antd'
import gridGutter from '../../utils/gridGutter'
import './index.less'

class Home extends Component {
  render() {
    console.log(gridGutter)
    return (
      <div className="home-container">
        <div className="home-main">
            <Row gutter={gridGutter}>
                <Col span={12}>col-12</Col>
                <Col span={12}>
                    <Timeline>
                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="red">
                            <p>Solve initial network problems 1</p>
                            <p>Solve initial network problems 2</p>
                            <p>Solve initial network problems 3 2015-09-01</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </div>
      </div>
    )
  }

}

export default Home
import React, { Component } from 'react'
import { Row, Col, Timeline, List, Avatar, Icon, Tag, Checkbox } from 'antd'
import gridGutter from '../../utils/gridGutter'
import gridSpan from '../../utils/gridSpan'
import './index.less'
import ChartCard from '../../components/ChartCard'

class Home extends Component {
  render() {
      const data = [
          {
              title: '在吗',
              type: '消息',
              icon: 'message',
              description: '下午两点把xx报表发给我'
          },
          {
              title: '跨海大桥项目',
              type: '项目',
              icon: 'appstore',
              description: '中期：继续采购钢筋xx吨'
          },
          {
              title: '用户权限问题',
              type: '问题',
              icon: 'question-circle',
              description: '用户权限设置后无效'
          },
          {
              title: '高铁项目',
              type: '项目',
              icon: 'appstore',
              description: '项目投标进行中'
          },
      ];
    return (
      <div className="home-container">
          <div className="home-main-container">
              <div className="home-main-header">
                  <Row gutter={gridGutter}>
                      <Col span={12}>
                          <ChartCard icon="appstore" title="项目概况"/>
                      </Col>
                      <Col span={12}>
                          <ChartCard icon="question-circle" title="问题概况"/>
                      </Col>
                  </Row>
              </div>
              <div className="home-main-content">
                  <Timeline>
                      <Timeline.Item color="red">
                          <div className="timeline-time-show">2019-12-6</div>
                          <Row gutter={gridGutter} className="dynamic-list">
                              <List
                                  itemLayout="horizontal"
                                  dataSource={data}
                                  renderItem={item => (
                                      <Col {...gridSpan}>
                                          <List.Item className="dynamic-item clearfix">
                                              <List.Item.Meta
                                                  className="dynamic-item-left fl"
                                                  avatar={
                                                      <Avatar size={38} shape="square" src={require('../../../assets/avatar.jpg')} />
                                                  }
                                                  title={
                                                      <div className="dynamic-item-left-top">
                                                          <Tag color="blue">
                                                              <Icon type={item.icon} theme="twoTone" />
                                                              <span>{item.type}</span>
                                                          </Tag>
                                                          <span className="dynamic-item-title">{item.title}</span>
                                                      </div>
                                                  }
                                                  description={
                                                      <span className="dynamic-item-description">{item.description}</span>
                                                  }/>
                                              <div className="dynamic-item-right fl">
                                                  <div className="dynamic-item-tool">
                                                      <Icon type="pushpin" />
                                                  </div>
                                                  <div className="dynamic-item-tool">
                                                      <Checkbox />
                                                  </div>
                                              </div>
                                          </List.Item>
                                      </Col>
                                  )}/>
                          </Row>
                      </Timeline.Item>
                      <Timeline.Item color="gray">
                          <div className="timeline-time-show">2019-12-05</div>
                          <Row gutter={gridGutter} className="dynamic-list">
                              <List
                                  itemLayout="horizontal"
                                  dataSource={data}
                                  renderItem={item => (
                                      <Col {...gridSpan}>
                                          <List.Item className="dynamic-item clearfix">
                                              <List.Item.Meta
                                                  className="dynamic-item-left fl"
                                                  avatar={
                                                      <Avatar size={38} shape="square" src={require('../../../assets/avatar.jpg')} />
                                                  }
                                                  title={
                                                      <div className="dynamic-item-left-top">
                                                          <Tag color="blue">
                                                              <Icon type={item.icon} theme="twoTone" />
                                                              <span>{item.type}</span>
                                                          </Tag>
                                                          <span className="dynamic-item-title">{item.title}</span>
                                                      </div>
                                                  }
                                                  description={
                                                      <span className="dynamic-item-description">{item.description}</span>
                                                  }/>
                                              <div className="dynamic-item-right fl">
                                                  <div className="dynamic-item-tool">
                                                      <Icon type="pushpin" />
                                                  </div>
                                                  <div className="dynamic-item-tool">
                                                      <Checkbox />
                                                  </div>
                                              </div>
                                          </List.Item>
                                      </Col>
                                  )}/>
                          </Row>
                      </Timeline.Item>
                      <Timeline.Item color="gray">
                          <div className="timeline-time-show">2019-12-04</div>
                          <Row gutter={gridGutter} className="dynamic-list">
                              <List
                                  itemLayout="horizontal"
                                  dataSource={data}
                                  renderItem={item => (
                                      <Col {...gridSpan}>
                                          <List.Item className="dynamic-item clearfix">
                                              <List.Item.Meta
                                                  className="dynamic-item-left fl"
                                                  avatar={
                                                      <Avatar size={38} shape="square" src={require('../../../assets/avatar.jpg')} />
                                                  }
                                                  title={
                                                      <div className="dynamic-item-left-top">
                                                          <Tag color="blue">
                                                              <Icon type={item.icon} theme="twoTone" />
                                                              <span>{item.type}</span>
                                                          </Tag>
                                                          <span className="dynamic-item-title">{item.title}</span>
                                                      </div>
                                                  }
                                                  description={
                                                      <span className="dynamic-item-description">{item.description}</span>
                                                  }/>
                                              <div className="dynamic-item-right fl">
                                                  <div className="dynamic-item-tool">
                                                      <Icon type="pushpin" />
                                                  </div>
                                                  <div className="dynamic-item-tool">
                                                      <Checkbox />
                                                  </div>
                                              </div>
                                          </List.Item>
                                      </Col>
                                  )}/>
                          </Row>
                      </Timeline.Item>
                  </Timeline>
              </div>
          </div>
      </div>
    )
  }
}

export default Home
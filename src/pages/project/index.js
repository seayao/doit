import React, { Component } from 'react'
import { Card, List, Button, Typography, Pagination } from 'antd'
import listGrid from '../../utils/listGrid'
import './index.less'

const { Paragraph } = Typography

class Project extends Component {
  render() {
      const list = [{"id":"fake-list-0","owner":"付小小","title":"Alipay","avatar":"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png","status":"active","percent":74,"logo":"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png","href":"https://ant.design","updatedAt":"2019-12-03T07:34:10.925Z","createdAt":"2019-12-03T07:34:10.925Z","subDescription":"那是一种内在的东西， 他们到达不了，也无法触及的","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":183083,"newUser":1854,"star":147,"like":159,"message":14,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-1","owner":"曲丽丽","title":"Angular","avatar":"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png","status":"exception","percent":83,"logo":"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png","href":"https://ant.design","updatedAt":"2019-12-03T05:34:10.925Z","createdAt":"2019-12-03T05:34:10.925Z","subDescription":"希望是一个好东西，也许是最好的，好东西是不会消亡的","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":169024,"newUser":1103,"star":147,"like":142,"message":12,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-2","owner":"林东东","title":"Ant Design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png","status":"normal","percent":90,"logo":"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png","href":"https://ant.design","updatedAt":"2019-12-03T03:34:10.925Z","createdAt":"2019-12-03T03:34:10.925Z","subDescription":"生命就像一盒巧克力，结果往往出人意料","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":143441,"newUser":1884,"star":147,"like":188,"message":19,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-3","owner":"周星星","title":"Ant Design Pro","avatar":"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png","status":"active","percent":55,"logo":"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png","href":"https://ant.design","updatedAt":"2019-12-03T01:34:10.925Z","createdAt":"2019-12-03T01:34:10.925Z","subDescription":"城镇中有那么多的酒馆，她却偏偏走进了我的酒馆","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":187362,"newUser":1250,"star":167,"like":170,"message":20,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-4","owner":"吴加好","title":"Bootstrap","avatar":"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png","status":"exception","percent":87,"logo":"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png","href":"https://ant.design","updatedAt":"2019-12-02T23:34:10.925Z","createdAt":"2019-12-02T23:34:10.925Z","subDescription":"那时候我只会想自己想要什么，从不想自己拥有什么","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":100789,"newUser":1001,"star":105,"like":189,"message":14,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-5","owner":"朱偏右","title":"React","avatar":"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png","status":"normal","percent":84,"logo":"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png","href":"https://ant.design","updatedAt":"2019-12-02T21:34:10.925Z","createdAt":"2019-12-02T21:34:10.925Z","subDescription":"那是一种内在的东西， 他们到达不了，也无法触及的","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":146835,"newUser":1996,"star":133,"like":200,"message":14,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-6","owner":"鱼酱","title":"Vue","avatar":"https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png","status":"active","percent":57,"logo":"https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png","href":"https://ant.design","updatedAt":"2019-12-02T19:34:10.925Z","createdAt":"2019-12-02T19:34:10.925Z","subDescription":"希望是一个好东西，也许是最好的，好东西是不会消亡的","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":135191,"newUser":1469,"star":190,"like":146,"message":19,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]},{"id":"fake-list-7","owner":"乐哥","title":"Webpack","avatar":"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png","cover":"https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png","status":"exception","percent":64,"logo":"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png","href":"https://ant.design","updatedAt":"2019-12-02T17:34:10.925Z","createdAt":"2019-12-02T17:34:10.925Z","subDescription":"生命就像一盒巧克力，结果往往出人意料","description":"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。","activeUser":104082,"newUser":1296,"star":168,"like":161,"message":15,"content":"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。","members":[{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png","name":"曲丽丽","id":"member1"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png","name":"王昭君","id":"member2"},{"avatar":"https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png","name":"董娜娜","id":"member3"}]}]
      const loading = false
      const cardList = list ? (
          <List
              rowKey="id"
              loading={loading}
              grid={listGrid}
              dataSource={list}
              renderItem={item => (
                  <List.Item>
                      <Card
                          className="card-item"
                          hoverable
                          cover={<img alt={item.title} src={item.cover} />}>
                          <Card.Meta
                              title={<a>{item.title}</a>}
                              description={
                                  <Paragraph
                                      ellipsis={{
                                          rows: 2,
                                      }}>
                                      {item.subDescription}
                                  </Paragraph>
                              }/>
                          <div>
                              <span>{item.updatedAt}</span>
                              <div>
                              </div>
                          </div>
                      </Card>
                  </List.Item>
              )}
          />
      ) : null;
    return (
        <div className="public-container">
            <div className="public-header-container">
                <div className="public-header project-header">
                    <div className="btn-wrap">
                        <Button shape="circle" icon="search" />
                    </div>
                    <div className="btn-wrap">
                       <Button shape="circle" icon="plus" />
                    </div>
                </div>
            </div>
            <div className="public-main-container">
                <div className="public-main project-main">{cardList}</div>
            </div>
            <div className="public-footer-container">
                <div className="public-footer">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
  }
}

export default Project
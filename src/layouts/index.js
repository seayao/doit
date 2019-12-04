import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import SideBar from './SideBar'
import Home from '../pages/home/index'
import routerConfig from '../router'
import { Layout } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.less'

const { Sider, Content } = Layout

class Layouts extends Component {
    render() {
        const path = this.props.location.pathname
        return (
            <Layout>
                <Sider>
                    <SideBar />
                </Sider>
                <Layout className="main-container">
                    <Content>
                        <TransitionGroup className="transition-group-container">
                            <CSSTransition
                                timeout={200}
                                classNames="fade"
                                key={path}>
                                <Switch>
                                    <Route exact path='/' component={Home}/>
                                    {
                                        routerConfig.map((router, index) => (
                                            <Route path={router.path} component={router.component} key={index}/>
                                        ))
                                    }
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Layouts)

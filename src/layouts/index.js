import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import SideBar from './SideBar'
import Home from '../pages/home/index'
import Project from '../pages/project'
import Bug from '../pages/bug'
import Message from '../pages/message'
import Setting from '../pages/setting'
import { Layout } from 'antd'
const { Sider, Content } = Layout

class Layouts extends Component {
    render() {
        return(
            <Layout>
                <Sider>
                    <SideBar />
                </Sider>
                <Layout style={{ background: '#f0f2f5' }}>
                    <Content>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/project' component={Project}/>
                            <Route path='/bug' component={Bug}/>
                            <Route path='/message' component={Message}/>
                            <Route path='/setting' component={Setting}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Layouts

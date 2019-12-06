import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Avatar, Badge } from 'antd'
import './index.less'
import { Menu, Icon, Tooltip } from 'antd'
import routerConfig from '../../router'
import { version, githubUrl } from '../../defaultSettings'
const { SubMenu } = Menu
const { shell } = require('electron')

class SideBar extends Component {
    getMenuNodes = (routerConfig) => { // 动态生成菜单
        return routerConfig.map(item => {
            if (!item.hidden) { // 跳过隐藏的路由
                if (item.children && item.children.length) {
                    const path = this.props.location.pathname
                    const c = item.children.find(c => c.path === path)
                    if (c) {
                        this.openKey = item.path
                    }
                    return (
                        <SubMenu
                            key={item.path}
                            title={
                                <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                            }>
                            { this.getMenuNodes(item.children) }
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={item.path}>
                            <Link to={item.path}>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                }
            } else {
                return false
            }
        })
    }

    handleGithubClick = () => {
        shell.openExternal(githubUrl)
    }

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(routerConfig) // 动态获取菜单
    }

    render() {
        let path = this.props.location.pathname
        path = (path === '/' ? '/home' : path)
        const openKey = this.openKey
        return(
            <div className="side-bar-container">
                <div className="logo-container">
                    <Badge className="logo-img-wrap" count={1} style={{ boxShadow: 'none', WebkitAppRegion: 'no-drag' } }>
                        <Avatar shape="square" size={64} src={require('../../../assets/avatar.jpg')} />
                    </Badge>
                    <div className="logo-label">
                        <span>YYYAO</span>
                    </div>
                </div>
                <div className="menu-container">
                    <Menu
                        selectedKeys={[path]}
                        defaultOpenKeys={[openKey]}
                        mode="inline">
                        {
                            this.menuNodes
                        }
                    </Menu>
                </div>
                <div className="footer-container">
                    <div className="footer-main">
                        <div className="version">v {version}</div>
                        <Tooltip className="link-wrap" placement="top" title="⭐star一下">
                            <div className="link" onClick={this.handleGithubClick}>
                                <Icon type="github" />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SideBar)
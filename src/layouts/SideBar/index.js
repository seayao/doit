import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Avatar, Badge } from 'antd'
import './index.less'
import { Menu, Icon, Tooltip } from 'antd'
import defaultSettings from '../../defaultSettings'
import routerConfig from '../../router'
import { githubUrl } from '../../defaultSettings'
const { SubMenu } = Menu
const { shell } = require('electron')

class SideBar extends Component {
    getMenuNodes = (routerConfig) => { // 动态生成菜单
        return routerConfig.map(item => {
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
                    <Badge count={1}>
                        <Avatar size={64} src={defaultSettings.logo} className="logo-img" />
                    </Badge>
                    <div className="logo-label">{defaultSettings.name}</div>
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
                        <div className="version">v 0.1.0</div>
                        <div className="link" onClick={this.handleGithubClick}>
                            <Tooltip placement="top" title="⭐star一下">
                                <Icon type="github" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SideBar)
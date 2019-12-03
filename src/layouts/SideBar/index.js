import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Avatar, Badge } from 'antd'
import './index.less'
import { Menu, Icon, Tooltip } from 'antd'
import defaultSettings from '../../defaultSettings'
import menuList from '../../router'
const { SubMenu } = Menu

class SideBar extends Component {
    getMenuNodes = (menuList) => { // 动态生成菜单
        return menuList.map(item => {
            if (item.children && item.children.length) {
                const path = this.props.location.pathname
                const c = item.children.find(c => c.key === path)
                if (c) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} theme="twoTone" />
                                <span>{item.title}</span>
                            </span>
                        }>
                        { this.getMenuNodes(item.children) }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} theme="twoTone" />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList) // 动态获取菜单
    }

    render() {
        const path = this.props.location.pathname
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
                        <div className="link">
                            <Tooltip placement="top" title="支持一下">
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
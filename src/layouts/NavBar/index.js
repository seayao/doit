import React, { Component } from 'react'
import { Icon, Input, notification } from 'antd'
import './index.less'
const ipcRenderer = require('electron').ipcRenderer
const { Search } = Input

class NavBar extends Component {
    state = {
        isTop: false,
        isMax: false
    }

    handleTopWindow = () => { // 置顶窗口
        ipcRenderer.send('window-top', !this.state.isTop)
    }

    handleMinWindow = () => { // 最小化窗口
        ipcRenderer.send('window-min')
    }

    handleMaxWindow = () => { // 最大化/还原窗口
        notification.error({
            message: 'This is a bug from electron',
            description: 'when you set transparent is true, win.isMaximized() is always return false,so I have temporarily turned it off.',
            top: 70
        })
        // ipcRenderer.send('window-max')
    }

    handleCloseWindow = () => { // 关闭窗口
        ipcRenderer.send('window-close')
    }

    componentDidMount() {
        ipcRenderer.on('main-window-is-top', (event, msg) => {
            this.setState({
                isTop: msg
            })
        })

        ipcRenderer.on('main-window-max', (event) => {
            this.setState({
                isMax: true
            })
        })
        ipcRenderer.on('main-window-unmax', (event) => {
            this.setState({
                isMax: false
            })
        })
    }

    render() {
        const { isTop, isMax } = this.state
        return (
            <div className="navbar-container clearfix">
                <div className="navbar-left fl">
                    <Icon type="sync" />
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
                <div className="navbar-right fr">
                    <div className="tool-wrap">
                        <div className="tool-item tool-item-top" onClick={ this.handleTopWindow }>
                            {
                                isTop ? <Icon type="pushpin" theme="twoTone" className="top-active" /> : <Icon type="pushpin" className="top-default" />
                            }
                        </div>
                        <div className="tool-item tool-item-min" onClick={ this.handleMinWindow }>
                            <Icon type="minus" />
                        </div>
                        <div className="tool-item tool-item-max" onClick={ this.handleMaxWindow }>
                            {
                                isMax ? <Icon type="block" /> : <Icon type="border" />
                            }
                        </div>
                        <div className="tool-item tool-item-close" onClick={ this.handleCloseWindow }>
                            <Icon type="close" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
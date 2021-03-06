import React, { Component } from 'react'
import { Table, Divider, Tag, Pagination } from 'antd'
import './index.less'

class Bug extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    }

    start = () => {
        // this.setState({ loading: true })
        // setTimeout(() => {
        //     this.setState({
        //         selectedRowKeys: [],
        //         loading: false
        //     })
        // }, 1000)
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    componentWillMount() {
        this.start()
    }

  render() {
      const columns = [
          {
              title: '标题',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
          },
          {
              title: '级别',
              dataIndex: 'level',
              key: 'level',
          },
          {
              title: '创建',
              dataIndex: 'create',
              key: 'create',
          },
          {
              title: '状态',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                  <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
              ),
          },
          {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                  <span>
        <a>编辑</a>
        <Divider type="vertical" />
        <a>删除</a>
      </span>
              ),
          },
      ]

      const data = [
          {
              key: '1',
              name: '表格头部固定/表格高度',
              level: 32,
              create: 'yhy',
              tags: ['future'],
          },
          {
              key: '4',
              name: '边框border及border-radius问题',
              level: 42,
              create: 'yhy',
              tags: ['future'],
          },
          {
              key: '5',
              name: '禁止拖动元素如：左侧菜单',
              level: 42,
              create: 'yhy',
              tags: ['future'],
          },
          {
              key: '7',
              name: '拖拽区域右键事件',
              level: 42,
              create: 'yhy',
              tags: ['future'],
          },
          {
              key: '8',
              name: '搜索框聚焦问题',
              level: 42,
              create: 'yhy',
              tags: ['future'],
          },
          {
              key: '9',
              name: '程序图标',
              level: 42,
              create: 'yhy',
              tags: ['future'],
          },
          {
              key: '10',
              name: 'UI主题',
              level: 32,
              create: 'yhy',
              tags: ['future'],
          },
      ]

      const { loading, selectedRowKeys } = this.state
      const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
      }
    return (
        <div className="public-container">
            <div className="public-header-container">
                <div className="public-header">
                    aaa
                </div>
            </div>
            <div className="public-main-container">
               <div className="public-main">
                   <Table
                       loading={loading}
                       rowSelection={rowSelection}
                       columns={columns}
                       dataSource={data}
                       pagination={false}
                       className="bug-main-table" />
               </div>
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

export default Bug
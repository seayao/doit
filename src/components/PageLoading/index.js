import React from 'react'
import { Spin } from 'antd'
import './index.less'

const PageLoading = () => (
    <div className="page-loading-container">
        <Spin size="large" />
    </div>
)

export default PageLoading
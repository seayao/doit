import Home from '../pages/home/index'
import Project from '../pages/project'
import Bug from '../pages/bug'
import Message from '../pages/message'
import Setting from '../pages/setting'

const routerConfig = [{
    path: '/home',
    component: Home,
    title: '首页',
    icon: 'home'
}, {
    path: '/project',
    component: Project,
    title: '项目',
    icon: 'appstore'
}, {
    path: '/bug',
    component: Bug,
    title: '问题',
    icon: 'question-circle'
}, {
    path: '/message',
    component: Message,
    title: '消息',
    icon: 'message'
}, {
    path: '/setting',
    component: Setting,
    title: '设置',
    icon: 'setting'
}]

export default routerConfig
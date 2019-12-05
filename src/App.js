import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import PageLoading from './components/PageLoading'
import './styles/index.less'

class App extends Component {
    state = {
        loading: false,
    }

    init = () => {
        this.setState({loading: true})
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 400)
    }

    componentWillMount() {
        this.init()
    }
  render() {
    return (
        this.state.loading ? <PageLoading/> :  <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Layouts} />
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App
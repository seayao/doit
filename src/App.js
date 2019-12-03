import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layouts from './layouts/index'
import './styles/index.less'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Layouts} />
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App
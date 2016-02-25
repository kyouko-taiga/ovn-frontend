import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'


class App extends React.Component {
    render() {
        return <div>Hello, World!</div>
    }
}


const routes = {
    path: '/',
    component: App
}


render(<Router history={browserHistory} routes={routes} />, document.getElementById('ovn-app'))

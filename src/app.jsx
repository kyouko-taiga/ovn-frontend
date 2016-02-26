import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import EditorView from './views/EditorView'


class App extends React.Component {
    render() {
        return this.props.children
    }
}


const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: EditorView
    }
}


render(<Router history={browserHistory} routes={routes} />, document.getElementById('ovn-app'))

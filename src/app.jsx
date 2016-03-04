import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import EditorView from './views/EditorView'
import SceneItemView from './views/SceneItemView'
import SceneSettingsView from './views/SceneSettingsView'


class App extends React.Component {
    render() {
        return this.props.children
    }
}


const routes = {
    path: '/',
    component: App,
    childRoutes: [{
        path: 'editor/:gameuid',
        component: EditorView,
        childRoutes: [{
            path: ':sceneuid',
            childRoutes: [{
                path: 'items/:itemuid',
                component: SceneItemView
            },{
                path: 'settings',
                component: SceneSettingsView
            }]
        }]
    }]
}


render(<Router history={browserHistory} routes={routes} />, document.getElementById('ovn-app'))

import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import EditorView from './views/EditorView'
import SceneItemEditorView from './views/SceneItemEditorView'


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
    },
    childRoutes: [{
        path: '/editor/:gameuid',
        childRoutes: [{
            path: ':sceneuid',
            childRoutes: [{
                path: ':itemuid',
                component: SceneItemEditorView
            }]
        }]
    }]
}


render(<Router history={browserHistory} routes={routes} />, document.getElementById('ovn-app'))

import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import SceneEditor from '../components/editor/SceneEditor'


export default class SceneSettingsViews extends React.Component {
    render() {
        return <SceneEditor sceneuid={this.props.params.sceneuid} />
    }
}

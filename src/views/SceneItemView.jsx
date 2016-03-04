import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import GameScriptEditor from '../components/editor/GameScriptEditor'
import SceneItemEditor from '../components/editor/SceneItemEditor'


export default class SceneItemView extends React.Component {
    render() {
        return (
            <SceneItemEditor
                gameuid={this.props.params.gameuid}
                sceneuid={this.props.params.sceneuid}
                itemuid={this.props.params.itemuid}
            />
        )
    }
}

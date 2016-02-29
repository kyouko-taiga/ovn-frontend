import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import GameScriptEditor from '../components/editor/GameScriptEditor'
import SceneItemEditor from '../components/editor/SceneItemEditor'


export default class SceneItemEditorView extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={8}>
                        <SceneItemEditor itemuid={this.props.params.itemuid} />
                    </Col>
                    <Col md={4}>
                        <GameScriptEditor
                            gameuid={this.props.params.gameuid}
                            sceneuid={this.props.params.sceneuid}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

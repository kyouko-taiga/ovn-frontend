import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import GameScriptEditor from '../components/editor/GameScriptEditor'


export default class EditorView extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={8}></Col>
                    <Col md={4}>
                        <GameScriptEditor gameuid="game-0" />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

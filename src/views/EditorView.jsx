import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import GameScriptEditor from '../components/editor/GameScriptEditor'


export default class EditorView extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={8}>
                        {this.props.children}
                    </Col>
                    <Col md={4}>
                        <GameScriptEditor gameuid={this.props.params.gameuid} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

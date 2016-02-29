import React from 'react'
import {Panel} from 'react-bootstrap'

import SceneContainer from './SceneContainer'


export default class GameScriptEditor extends React.Component {
    render() {
        return (
            <Panel header="Game Script">
                <div className="panel-group">
                    <SceneContainer />
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-fw fa-plus"></i> Add a Scene
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}

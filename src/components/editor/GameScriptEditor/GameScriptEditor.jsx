import React from 'react'
import {Panel} from 'react-bootstrap'

import ChapterContainer from './ChapterContainer'


export default class GameScriptEditor extends React.Component {
    render() {
        return (
            <Panel header="Game Script">
                <div className="panel-group">
                    <ChapterContainer />
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-fw fa-plus"></i> Add a chapter
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}

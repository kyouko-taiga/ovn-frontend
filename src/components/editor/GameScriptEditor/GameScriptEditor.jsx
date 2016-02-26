import React from 'react'
import {Panel} from 'react-bootstrap'

import ChapterEditor from './ChapterEditor'


export default class GameScriptEditor extends React.Component {
    render() {
        return (
            <Panel header="Game Script">
                <ChapterEditor />
            </Panel>
        )
    }
}

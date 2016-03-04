import React from 'react'
import {Panel} from 'react-bootstrap'

import {createScene} from '../../../actions/sceneActions'
import StoreConnector from '../../../connectors/StoreConnector'
import GameStore from '../../../stores/GameStore'

import SceneContainer from './SceneContainer'


class GameScriptEditor extends React.Component {
    constructor(props) {
        super(props)

        this.createScene = this.createScene.bind(this)
    }

    createScene() {
        const uid = createScene({
            game_uid: this.props.game.uid,
            name: 'New Scene',
            background: null,
            items: []
        })

        const url = `/editor/${this.props.game.uid}/${uid}/settings`
        this.context.router.push(url)
    }

    render() {
        const scenes = this.props.game.scenes.map((uid, index) => {
            return <SceneContainer key={index} game={this.props.game} sceneuid={uid} />
        })

        return (
            <Panel header="Game Script">
                <div className="panel-group">
                    {scenes}
                    <div
                        onClick={this.createScene}
                        className="panel panel-default ovn-scene-button"
                    >
                        <div className="panel-heading">
                            <i className="fa fa-fw fa-plus"></i> Add a Scene
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}

GameScriptEditor.contextTypes = {
    router: React.PropTypes.object.isRequired
}


export default StoreConnector(
    GameScriptEditor,

    // Handle GameStore changes.
    GameStore, (props) => ({game: GameStore.get(props.gameuid)})
)

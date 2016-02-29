import React from 'react'
import {Panel} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import GameStore from '../../../stores/GameStore'

import SceneContainer from './SceneContainer'


export default StoreConnector(
    class extends React.Component {
        render() {
            const scenes = this.props.game.scenes.map((uid, index) => {
                return <SceneContainer key={index} game={this.props.game} sceneuid={uid} />
            })

            return (
                <Panel header="Game Script">
                    <div className="panel-group">
                        {scenes}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="fa fa-fw fa-plus"></i> Add a Scene
                            </div>
                        </div>
                    </div>
                </Panel>
            )
        }
    },

    // Handle GameStore changes.
    GameStore, (props) => ({game: GameStore.get(props.gameuid)})
)

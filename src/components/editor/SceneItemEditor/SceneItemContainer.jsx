import React from 'react'
import {Alert} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import GameStore from '../../../stores/GameStore'
import SceneItemStore from '../../../stores/SceneItemStore'

import DialogEditor from './DialogEditor'


export default StoreConnector(
    class extends React.Component {
        render() {
            if (this.props.item === null) {
                return (
                    <Alert bsStyle="info">
                        <i className="fa fa-fw fa-info" />
                        {"This scene item was deleted or doesn't exist."}
                    </Alert>
                )
            }

            switch (this.props.item.type) {
            case 'dialog':
                return <DialogEditor game={this.props.game} dialog={this.props.item} />
            default:
                return null
            }
        }
    },

    // Handle GameStore and SceneItemStore changes.
    [GameStore, SceneItemStore], (props) => ({
        game: GameStore.get(props.gameuid),
        item: SceneItemStore.get(props.itemuid)
    })
)

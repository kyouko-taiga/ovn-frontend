import React from 'react'
import {Alert} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import GameStore from '../../../stores/GameStore'
import SceneItemStore from '../../../stores/SceneItemStore'

import CharacterActionEditor from './CharacterActionEditor'
import DialogEditor from './DialogEditor'
import SoundEditor from './SoundEditor'


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
            case 'character':
                return <CharacterActionEditor game={this.props.game} event={this.props.item} />
            case 'dialog':
                return <DialogEditor game={this.props.game} dialog={this.props.item} />
            case 'sound':
                return <SoundEditor game={this.props.game} event={this.props.item} />
            default:
                throw new Error(`Unknown scene item type: '${this.props.item.type}'.`)
            }
        }
    },

    // Handle GameStore and SceneItemStore changes.
    [GameStore, SceneItemStore], (props) => ({
        game: GameStore.get(props.gameuid),
        item: SceneItemStore.get(props.itemuid)
    })
)

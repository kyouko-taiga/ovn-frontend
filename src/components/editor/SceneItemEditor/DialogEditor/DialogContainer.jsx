import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import CharacterStore from '../../../../stores/CharacterStore'

import DialogEditor from './DialogEditor'


export default StoreConnector(
    class extends React.Component {
        render() {
            return (
                <DialogEditor
                    characterOptions={this.props.characters}
                    dialog={this.props.dialog}
                />
            )
        }
    },

    // Handle CharacterStore changes.
    CharacterStore, (props) => ({
        characters: CharacterStore
            .all()
            .filter((character) => (character.game_uid == props.game.uid))
    })
)
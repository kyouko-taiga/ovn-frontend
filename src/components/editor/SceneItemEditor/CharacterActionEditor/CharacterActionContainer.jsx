import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import CharacterStore from '../../../../stores/CharacterStore'

import CharacterActionEditor from './CharacterActionEditor'


export default StoreConnector(
    class extends React.Component {
        render() {
            return (
                <CharacterActionEditor {...this.props} />
            )
        }
    },

    // Handle CharacterStore changes.
    CharacterStore, (props) => ({
        characterOptions: CharacterStore
            .all()
            .filter((character) => (character.game_uid == props.game.uid))
    })
)

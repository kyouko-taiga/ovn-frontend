import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import CharacterStore from '../../../../stores/CharacterStore'

import CharacterItem from './CharacterItem'


export default StoreConnector(
    class extends React.Component {
        render() {
            return <CharacterItem {...this.props} />
        }
    },

    // Handle CharacterStore changes.
    CharacterStore, (props) => ({
        character: CharacterStore.get(props.item.character.uid)
    })
)

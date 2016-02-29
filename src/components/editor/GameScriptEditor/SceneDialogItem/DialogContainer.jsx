import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import CharacterStore from '../../../../stores/CharacterStore'

import DialogItem from './DialogItem'


export default StoreConnector(
    class extends React.Component {
        render() {
            return <DialogItem {...this.props} />
        }
    },

    // Handle CharacterStore changes.
    CharacterStore, (props) => ({
        character: CharacterStore.get(props.item.character)
    })
)

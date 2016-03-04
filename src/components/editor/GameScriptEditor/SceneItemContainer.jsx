import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneItemStore from '../../../stores/SceneItemStore'

import SceneDialogItem from './SceneDialogItem'
import SceneCharacterItem from './SceneCharacterItem'
import SceneSoundItem from './SceneSoundItem'


export default StoreConnector(
    class extends React.Component {
        render() {
            let ItemComponent
            switch (this.props.item.type) {
            case 'dialog':
                ItemComponent = SceneDialogItem
                break
            case 'sound':
                ItemComponent = SceneSoundItem
                break
            case 'character':
                ItemComponent = SceneCharacterItem
                break
            default:
                throw new Error(`Unknown scene item type: '${this.props.item.type}'.`)
            }

            const gameuid = this.props.game.uid
            const sceneuid = this.props.scene.uid
            const href = `editor/${gameuid}/${sceneuid}/items/${this.props.itemuid}`

            return (
                <LinkContainer to={href}>
                    <ItemComponent
                        game={this.props.game}
                        scene={this.props.scene}
                        item={this.props.item}
                    />
                </LinkContainer>
            )
        }
    },

    // Handle SceneStore changes.
    SceneItemStore, (props) => ({item: SceneItemStore.get(props.itemuid)})
)

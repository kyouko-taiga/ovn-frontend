import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneItemStore from '../../../stores/SceneItemStore'

import SceneDialogItem from './SceneDialogItem'
import SceneEventItem from './SceneEventItem'
import SceneImageItem from './SceneImageItem'
import SceneSoundItem from './SceneSoundItem'


export default StoreConnector(
    class extends React.Component {
        render() {
            let item
            switch (this.props.item.type) {
            case 'dialog':
                item = <SceneDialogItem dialog={this.props.item} />
                break
            case 'event':
                item = <SceneEventItem event={this.props.item} />
                break
            case 'image':
                item = <SceneImageItem image={this.props.item} />
                break
            case 'sound':
                item = <SceneSoundItem sound={this.props.item} />
                break
            default:
                return null
            }

            const to = `editor/${this.props.gameuid}/${this.props.sceneuid}/${this.props.itemuid}`
            return <LinkContainer to={to}>{item}</LinkContainer>
        }
    },

    // Handle SceneStore changes.
    SceneItemStore, (props) => ({item: SceneItemStore.get(props.itemuid)})
)
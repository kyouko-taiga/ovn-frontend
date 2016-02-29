import React from 'react'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneItemStore from '../../../stores/SceneItemStore'

import SceneDialogItem from './SceneDialogItem'
import SceneEventItem from './SceneEventItem'
import SceneImageItem from './SceneImageItem'
import SceneSoundItem from './SceneSoundItem'


export default StoreConnector(
    class extends React.Component {
        render() {
            switch (this.props.item.type) {
            case 'dialog':
                return <SceneDialogItem dialog={this.props.item} />
            case 'event':
                return <SceneEventItem event={this.props.item} />
            case 'image':
                return <SceneImageItem image={this.props.item} />
            case 'sound':
                return <SceneSoundItem sound={this.props.item} />
            default:
                return null
            }
        }
    },

    // Handle SceneStore changes.
    SceneItemStore, (props) => ({item: SceneItemStore.get(props.itemuid)})
)

import React from 'react'
import {Panel} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneItemStore from '../../../stores/SceneItemStore'

import SceneDialogEditor from './SceneDialogEditor'


export default StoreConnector(
    class extends React.Component {
        render() {
            switch (this.props.item.type) {
            case 'dialog':
                return <SceneDialogEditor dialog={this.props.item} />
            default:
                return null
            }
        }
    },

    // Handle SceneItemStore changes.
    SceneItemStore, (props) => ({item: SceneItemStore.get(props.itemuid)})
)

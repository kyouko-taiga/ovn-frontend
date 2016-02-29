import React from 'react'
import {Alert} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneItemStore from '../../../stores/SceneItemStore'

import SceneDialogEditor from './SceneDialogEditor'


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
                return <SceneDialogEditor dialog={this.props.item} />
            default:
                return null
            }
        }
    },

    // Handle SceneItemStore changes.
    SceneItemStore, (props) => ({item: SceneItemStore.get(props.itemuid)})
)

import React from 'react'
import {Alert} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneStore from '../../../stores/SceneStore'

import SceneEditor from './SceneEditor'


export default StoreConnector(
    class extends React.Component {
        render() {
            if (this.props.scene === null) {
                return (
                    <Alert bsStyle="info">
                        <i className="fa fa-fw fa-info" />
                        {"This scene was deleted or doesn't exist."}
                    </Alert>
                )
            }

            return <SceneEditor {...this.props} />
        }
    },

    // Handle SceneStore changes.
    SceneStore, (props) => ({
        scene: SceneStore.get(props.sceneuid)
    })
)
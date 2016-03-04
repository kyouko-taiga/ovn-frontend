import React from 'react'
import {Input} from 'react-bootstrap'

import StoreConnector from '../../../connectors/StoreConnector'
import ImageStore from '../../../stores/ImageStore'


export default StoreConnector(
    class extends React.Component {
        render() {
            if (this.props.background) {
                return (
                    <div className="ovn-scene-preview">
                        <img className="ovn-scene-background" src={this.props.background.urls[0]} />
                    </div>
                )
            } else {
                return null
            }
        }
    },

    // Handle ImageStore changes.
    ImageStore, (props) => ({background: ImageStore.get(props.scene.background)})
)

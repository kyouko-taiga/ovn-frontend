import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import SoundStore from '../../../../stores/SoundStore'

import SoundEditor from './SoundEditor'


export default StoreConnector(
    class extends React.Component {
        render() {
            return <SoundEditor {...this.props} />
        }
    },

    // Handle SoundStore changes.
    SoundStore, (props) => ({sound: SoundStore.get(props.event.sound)})
)

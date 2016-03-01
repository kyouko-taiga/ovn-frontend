import React from 'react'

import StoreConnector from '../../../../connectors/StoreConnector'
import SoundStore from '../../../../stores/SoundStore'

import SoundItem from './SoundItem'


export default StoreConnector(
    class extends React.Component {
        render() {
            return <SoundItem {...this.props} />
        }
    },

    // Handle SoundStore changes.
    SoundStore, (props) => ({
        sound: SoundStore.get(props.item.sound)
    })
)

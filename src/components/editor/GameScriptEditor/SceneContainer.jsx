import React from 'react'

import StoreConnector from '../../../connectors/StoreConnector'
import SceneStore from '../../../stores/SceneStore'

import SceneEditor from './SceneEditor'


export default StoreConnector(
    SceneEditor,

    // Handle SceneStore changes.
    SceneStore, (props) => ({scene: SceneStore.get(props.sceneuid)})
)

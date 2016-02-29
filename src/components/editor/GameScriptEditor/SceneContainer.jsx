import React from 'react'

import SceneEditor from './SceneEditor'


const SCENE_INSTANCE = {
    title: 'Scene 1',
    data: [
        {
            type: 'image',
            name: 'Room background'
        },
        {
            type: 'sound',
            name: 'Room music'
        },
        {
            type: 'event',
            action: 'add character',
            character: {
                name: 'Karen',
                state: 'normal'
            }
        },
        {
            type: 'event',
            action: 'add character',
            character: {
                name: 'Tsukihi',
                state: 'normal'
            }
        },
        {
            type: 'dialog',
            character: 'Karen',
            text: [
                "Midnight, on the bridge. Come alone.",
                "I'll find her and bring her home, I promise."
            ]
        },
        {
            type: 'dialog',
            character: 'Tsukihi',
            text: [
                "Am I supposed to be scared now?"
            ]
        }
    ]
}


export default class SceneContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            scene: SCENE_INSTANCE
        }
    }

    render() {
        return <SceneEditor scene={this.state.scene} />
    }
}

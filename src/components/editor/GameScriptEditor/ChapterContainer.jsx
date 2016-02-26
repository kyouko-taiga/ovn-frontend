import React from 'react'

import ChapterEditor from './ChapterEditor'


const CHAPTER_INSTANCE = {
    title: 'Chapter 1',
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


export default class ChapterContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chapter: CHAPTER_INSTANCE
        }
    }

    render() {
        return <ChapterEditor chapter={this.state.chapter} />
    }
}

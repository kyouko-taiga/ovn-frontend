import React from 'react'
import {ListGroup} from 'react-bootstrap'

import CollapsiblePanel from '../../common/CollapsiblePanel'

import ChapterDialogItem from './ChapterDialogItem'
import ChapterEventItem from './ChapterEventItem'
import ChapterImageItem from './ChapterImageItem'
import ChapterSoundItem from './ChapterSoundItem'


export default class ChapterEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: true
        }

        this.expand = this.expand.bind(this)
        this.collapse = this.collapse.bind(this)
    }

    expand() {
        this.setState({collapsed: false})
    }

    collapse() {
        this.setState({collapsed: true})
    }

    render() {
        return (
            <CollapsiblePanel
                onExpand={this.expand}
                onCollapse={this.collapse}
                heading="Chapter 1"
                collapsed={this.state.collapsed}
            >
                {this.renderChapterData()}
            </CollapsiblePanel>
        )
    }

    renderChapterData() {
        const items = this.props.chapter.data.map((item, index) => {
            switch (item.type) {
            case 'dialog':
                return <ChapterDialogItem key={index} dialog={item} />
            case 'event':
                return <ChapterEventItem key={index} event={item} />
            case 'image':
                return <ChapterImageItem key={index} image={item} />
            case 'sound':
                return <ChapterSoundItem key={index} sound={item} />
            default:
                return null
            }
        })

        return <ListGroup>{items}</ListGroup>
    }
}

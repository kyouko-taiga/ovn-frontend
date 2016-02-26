import React from 'react'

import CollapsiblePanel from '../../common/CollapsiblePanel'


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
                Game script goes here!
            </CollapsiblePanel>
        )
    }
}

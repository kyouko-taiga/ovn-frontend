import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SceneEventItem extends React.Component {
    render() {
        const label = this.makeLabel()

        return (
            <ListGroupItem bsStyle="warning" className="ovn-scene-item">
                <i className="fa fa-fw fa-bolt" /> {label}
            </ListGroupItem>
        )
    }

    makeLabel() {
        switch (this.props.event.action) {
        case 'add character':
            return `Add ${this.props.event.character.name}`
        default:
            return 'Event'
        }
    }
}

import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SceneEventItem extends React.Component {
    render() {
        const {dialog, className, bsStyle='warning', ...props} = this.props
        const label = this.makeLabel()
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        return (
            <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
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

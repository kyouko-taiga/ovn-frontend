import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class CharacterItem extends React.Component {
    render() {
        const {dialog, className, bsStyle='warning', ...props} = this.props
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        const label = this.makeLabel()

        return (
            <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
                <i className="fa fa-fw fa-user" /> {label}
            </ListGroupItem>
        )
    }

    makeLabel() {
        switch (this.props.item.action.type) {
        case 'show':
            return `Show ${this.props.character.name}`
        default:
            throw new Error(`Unknown character event type: '${this.props.item.action.type}'.`)
        }
    }
}

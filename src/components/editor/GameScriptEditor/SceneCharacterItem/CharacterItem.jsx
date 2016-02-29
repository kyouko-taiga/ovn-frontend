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
        if (this.props.item.character === null) {
            return 'Character Action'
        }

        switch (this.props.item.action) {
        case 'show':
            return `Show ${this.props.character.name}`
        case 'hide':
            return `Hide ${this.props.character.name}`
        default:
            throw new Error(`Unknown character action type: '${this.props.item.action}'.`)
        }
    }
}

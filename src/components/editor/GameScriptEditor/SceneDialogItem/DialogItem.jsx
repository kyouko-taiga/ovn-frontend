import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class DialogItem extends React.Component {
    render() {
        const {item, character, className, bsStyle='info', ...props} = this.props
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        const label = (item.character && item.text)
            ? `${character.name} says: "${item.text}"`
            : 'Scene dialog'

        return (
            <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
                <i className="fa fa-fw fa-comment" /> {label}
            </ListGroupItem>
        )
    }
}

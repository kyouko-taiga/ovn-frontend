import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SoundItem extends React.Component {
    render() {
        const {item, sound, className, bsStyle='success', ...props} = this.props
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        const label = sound
            ? `Play "${sound.name}"`
            : 'New scene sound'

        return (
        <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
            <i className="fa fa-fw fa-music" /> {label}
        </ListGroupItem>
        )
    }
}

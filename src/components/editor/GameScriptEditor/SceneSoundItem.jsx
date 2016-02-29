import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SceneSoundItem extends React.Component {
    render() {
        const {dialog, className, bsStyle='success', ...props} = this.props
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        return (
            <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
                <i className="fa fa-fw fa-music" /> Play {this.props.sound.name}
            </ListGroupItem>
        )
    }
}

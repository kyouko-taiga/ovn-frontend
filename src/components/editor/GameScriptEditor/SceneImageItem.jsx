import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SceneImageItem extends React.Component {
    render() {
        const {dialog, className, bsStyle='danger', ...props} = this.props
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        return (
            <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
                <i className="fa fa-fw fa-picture-o" /> Show {this.props.item.name}
            </ListGroupItem>
        )
    }
}

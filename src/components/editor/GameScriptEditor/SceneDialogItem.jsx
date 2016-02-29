import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SceneDialogItem extends React.Component {
    render() {
        const {dialog, className, bsStyle='info', ...props} = this.props
        const label = (dialog.character && dialog.text)
            ? `${dialog.character} says: "${dialog.text}"`
            : 'Scene dialog'
        const classes = (typeof className !== undefined)
            ? 'ovn-scene-item ' + className
            : 'ovn-scene-item'

        return (
            <ListGroupItem bsStyle={bsStyle} className={classes} {...props}>
                <i className="fa fa-fw fa-comment" /> {label}
            </ListGroupItem>
        )
    }
}

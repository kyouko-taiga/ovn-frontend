import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class ChapterDialogItem extends React.Component {
    render() {
        const label = `${this.props.dialog.character} says: "${this.props.dialog.text[0]}"`

        return (
            <ListGroupItem bsStyle="info" className="ovn-chapter-item">
                <i className="fa fa-fw fa-comment" /> {label}
            </ListGroupItem>
        )
    }
}

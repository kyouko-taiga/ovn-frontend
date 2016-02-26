import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class ChapterImageItem extends React.Component {
    render() {
        return (
            <ListGroupItem bsStyle="danger" className="ovn-chapter-item">
                <i className="fa fa-fw fa-picture-o" /> Show {this.props.image.name}
            </ListGroupItem>
        )
    }
}

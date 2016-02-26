import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class ChapterSoundItem extends React.Component {
    render() {
        return (
            <ListGroupItem bsStyle="success" className="ovn-chapter-item">
                <i className="fa fa-fw fa-music" /> Play {this.props.sound.name}
            </ListGroupItem>
        )
    }
}

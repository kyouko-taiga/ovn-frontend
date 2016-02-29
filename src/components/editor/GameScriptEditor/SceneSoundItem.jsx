import React from 'react'
import {ListGroupItem} from 'react-bootstrap'


export default class SceneSoundItem extends React.Component {
    render() {
        return (
            <ListGroupItem bsStyle="success" className="ovn-scene-item">
                <i className="fa fa-fw fa-music" /> Play {this.props.sound.name}
            </ListGroupItem>
        )
    }
}

import React from 'react'
import {Input} from 'react-bootstrap'


export default class SoundMedia extends React.Component {
    render() {
        const minutes = parseInt(this.props.sound.duration / 60)
        const seconds = this.props.sound.duration % 60

        return (
            <Input>
                <div className="media">
                    <div className="media-left">
                        <div className="ovn-media-icon ovn-sound">
                            <i className="fa fa-music" />
                        </div>
                    </div>
                    <div className="media-body">
                        <div>
                            <strong>{this.props.sound.name}</strong>
                            {' '}
                            <a onClick={this.props.onShowSelector} href="#">(change)</a>
                        </div>
                        <div className="text-muted">
                            Duration: {minutes}:{('0' + seconds).slice(-2)}
                        </div>
                    </div>
                </div>
            </Input>
        )
    }
}

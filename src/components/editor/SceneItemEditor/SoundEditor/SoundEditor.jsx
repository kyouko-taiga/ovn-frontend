import React from 'react'
import {Row, Col, Panel, Input, ButtonToolbar, Button} from 'react-bootstrap'

import {updateItem, deleteItem} from '../../../../actions/sceneActions'

import SoundPlayer from './SoundPlayer'


// function intersperse(arr, sep) {
//     if (arr.length === 0) {
//         return [];
//     }
//
//     return arr.slice(1).reduce(function(xs, x, i) {
//         return xs.concat([sep, x]);
//     }, [arr[0]]);
// }
//
//
// const tags = intersperse(sound.tags.map((tag, tag_index) => {
//     return <a key={tag_index} href="#">{tag}</a>
// }), ', ')


export default class SoundEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: null,
            volume: null,
            repeat: null
        }

        this.reset = this.reset.bind(this)
        this.submit = this.submit.bind(this)
        this.delete = this.delete.bind(this)

        this.handleShowSelector = this.handleShowSelector.bind(this)
        this.handleSoundChange = this.handleSoundChange.bind(this)
        this.handleVolumeChange = this.handleVolumeChange.bind(this)
        this.handleRepeatChange = this.handleRepeatChange.bind(this)
    }

    componentWillReceiveProps(props) {
        if (props.event != this.props.event) {
            this.setState({
                sound: null,
                volume: null,
                repeat: null
            })
        }
    }

    reset() {
        if (this.props.event) {
            this.setState({
                sound: this.props.event.sound,
                volume: this.props.event.volume,
                repeat: this.props.event.repeat
            })
        } else {
            this.setState({
                sound: null,
                volume: null,
                repeat: null
            })
        }
    }

    submit() {
        updateItem(
            this.props.event.uid,
            {sound: this.state.sound || this.props.event.sound}
        )

        this.setState({
            sound: null,
            volume: null,
            repeat: null
        })
    }

    delete() {
        deleteItem(this.props.event.uid)
    }

    handleShowSelector(e) {
        e.preventDefault()
        this.props.showSelector()
    }

    handleSoundChange(sound) {
        this.setState({sound: sound})
    }

    handleVolumeChange(e) {
        this.setState({volume: e.target.value})
    }

    handleRepeatChange(e) {
        this.setState({repeat: e.target.checked})
    }

    render() {
        const minutes = parseInt(this.props.sound.duration / 60)
        const seconds = this.props.sound.duration % 60
        const volume = this.state.volume || this.props.event.volume
        const repeat = this.state.repeat || this.props.event.repeat

        return (
            <Panel header="Sound editor">
                <form>
                    <Input>
                        <div className="media">
                            <div className="media-left">
                                <div className="ovn-media-icon ovn-sound">
                                    <i className="fa fa-music" />
                                </div>
                            </div>
                            <div className="media-body">
                                <div>
                                    <SoundPlayer sound={this.props.sound} />
                                    <strong>{this.props.sound.name}</strong>
                                    {' '}
                                    <a onClick={this.handleShowSelector} href="#">(change)</a>
                                </div>
                                <div className="text-muted">
                                    Duration: {minutes}:{('0' + seconds).slice(-2)}
                                </div>
                            </div>
                        </div>
                    </Input>
                    <Input label="Sound options">
                        <Row>
                            <Col xs={4}>
                                <Input
                                    onChange={this.handleVolumeChange}
                                    type="text" addonBefore={<i className="fa fa-volume-up" />}
                                    value={volume}
                                />
                            </Col>
                            <Col xs={4}>
                                <Input
                                    onChange={this.handleRepeatChange}
                                    type="checkbox" label="Repeat"
                                    checked={repeat}
                                />
                            </Col>
                        </Row>
                    </Input>
                    <hr />
                    <div className="clearfix">
                        <div className="pull-left">
                            <Button onClick={this.delete} bsStyle="danger">Delete</Button>
                        </div>
                        <div className="pull-right">
                            <ButtonToolbar>
                                <Button onClick={this.reset} bsStyle="default">Reset</Button>
                                <Button onClick={this.submit} bsStyle="primary">Save</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </form>
            </Panel>
        )
    }
}

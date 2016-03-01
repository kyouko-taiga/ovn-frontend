import Crafty from 'craftyjs'
import React from 'react'


export default class SoundPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPlaying: false
        }

        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)
    }

    componentDidMount() {
        Crafty.audio.add(this.props.sound.uid, this.props.sound.urls);
    }

    componentWillUnmount() {
        Crafty.audio.remove(this.props.sound.uid);
    }

    handlePlay(e) {
        if (Crafty.audio.play(this.props.sound.uid) !== null) {
            this.setState({isPlaying: true})

            const checkStatus = (() => {
                if (Crafty.audio.isPlaying(this.props.sound.uid)) {
                    setTimeout(checkStatus, 100)
                } else {
                    this.setState({isPlaying: false})
                }
            })

            checkStatus()
        }

        // Prevent the click event from bubbling to the parent.
        e.stopPropagation()
    }

    handlePause(e) {
        Crafty.audio.stop(this.props.sound.uid)
        this.setState({isPlaying: false})

        // Prevent the click event from bubbling to the parent.
        e.stopPropagation()
    }

    render() {
        if (this.state.isPlaying) {
            return (
                <span onClick={this.handlePause}>
                    <i className="fa fa-fw fa-pause" />
                </span>
            )
        } else {
            return (
                <span onClick={this.handlePlay}>
                    <i className="fa fa-fw fa-play" />
                </span>
            )
        }
    }
}
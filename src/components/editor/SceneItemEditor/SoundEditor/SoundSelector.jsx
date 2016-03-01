import React from 'react'
import {Alert, Panel, Input} from 'react-bootstrap'

import SoundPlayer from './SoundPlayer'


class SoundTable extends React.Component {
    makeChoiceHandler(uid) {
        return ((e) => {
            this.props.onChoice(uid)
        })
    }

    makePlayHandler(sound) {
        return ((e) =>{
            // Prevent the click event from bubbling to the parent.
            e.stopPropagation()
        })
    }

    render() {
        if (this.props.sounds.length == 0) {
            return (
                <Alert bsStyle="warning">
                    {"You don't have any sound resource matching the crietria."}
                </Alert>
            )
        }

        const sounds = this.props.sounds.map((sound, index) => {
            const minutes = parseInt(sound.duration / 60)
            const seconds = sound.duration % 60

            return (
                <tr
                    onClick={this.makeChoiceHandler(sound.uid)}
                    key={index} className="ovn-sound-row"
                >
                    <td><SoundPlayer sound={sound} /></td>
                    <td>{sound.name}</td>
                    <td>{minutes}:{('0' + seconds).slice(-2)}</td>
                </tr>
            )
        })

        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {sounds}
                </tbody>
            </table>
        )
    }
}


export default class SoundSelector extends React.Component {
    constructor(props) {
        super(props)

        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e) {
        this.props.onSearch(e.target.value)
    }

    render() {

        return (
            <Panel header="Sound selector">
                <Input
                    onChange={this.handleSearchChange}
                    type="text" placeholder="Filter by name and tags"
                    addonBefore={<i className="fa fa-search" />}
                    value={this.props.searchCriterion}
                />
                <SoundTable onChoice={this.props.onChoice} sounds={this.props.sounds} />
            </Panel>
        )
    }
}
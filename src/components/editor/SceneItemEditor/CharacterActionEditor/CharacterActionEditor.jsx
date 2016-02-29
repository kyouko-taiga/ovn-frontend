import React from 'react'
import {Row, Col, Panel, Input, ButtonToolbar, Button} from 'react-bootstrap'

import {updateItem, deleteItem} from '../../../../actions/sceneActions'


export default class CharacterActionEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            character: null,
            action: null,
            state: null,
            position: null
        }

        this.reset = this.reset.bind(this)
        this.submit = this.submit.bind(this)
        this.delete = this.delete.bind(this)

        this.handleCharacterChange = this.handleCharacterChange.bind(this)
        this.handleActionChange = this.handleActionChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handlePositionChange = this.handlePositionChange.bind(this)
    }

    componentWillReceiveProps(props) {
        if (props.event != this.props.event) {
            this.setState({
                character: null,
                action: null,
                state: null,
                position: null
            })
        }
    }

    reset() {
        if (this.props.event) {
            this.setState({
                character: this.props.event.character,
                action: this.props.event.action,
                state: this.props.event.state,
                position: this.props.event.position
            })
        } else {
            this.setState({
                character: null,
                action: null,
                state: null,
                position: null
            })
        }
    }

    submit() {
        // If we don't select any value for the event's character when we
        // submit the form, we'll store the value `null` while the user may
        // think he saved the first displayed value of the select input. A
        // simple workaround is to simply default to the displayed value.
        let character = this.state.character || this.props.event.character
        if (character === null) {
            character = this.refs.character.getValue()
        }

        // For the action, the state and the position, we choose respectively
        // `show`, `default` and `center` as default values.
        let action = this.state.action || this.props.event.action || 'show'
        let state = this.state.state || this.props.event.state || 'default'
        let position = this.state.position || this.props.event.position || 'center'

        updateItem(
            this.props.event.uid,
            {
                character: character,
                action: action,
                state: state,
                position: position
            }
        )

        this.setState({
            character: null,
            action: null,
            state: null,
            position: null
        })
    }

    delete() {
        deleteItem(this.props.event.uid)
    }

    handleCharacterChange(e) {
        this.setState({character: e.target.value})
    }

    handleActionChange(e) {
        this.setState({action: e.target.value})
    }

    handleStateChange(e) {
        this.setState({state: e.target.value})
    }

    handlePositionChange(e) {
        this.setState({position: e.target.value})
    }

    render() {
        const characterOptions = this.props.characterOptions.map((character, index) => {
            return <option key={index} value={character.uid}>{character.name}</option>
        })

        const character = this.state.character || this.props.event.character
        const action = this.state.action || this.props.event.action

        return (
            <Panel header="Character action editor">
                <form>
                    <Input
                        onChange={this.handleCharacterChange}
                        ref="character" type="select" label="Character"
                        value={character}
                    >
                        {characterOptions}
                    </Input>
                    <Input label="Action">
                        <Row>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handleActionChange}
                                    name="action" type="radio" value="show" label="Show"
                                    checked={action == 'show'}
                                />
                            </Col>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handleActionChange}
                                    name="action" type="radio" value="hide" label="Hide"
                                    checked={action == 'hide'}
                                />
                            </Col>
                        </Row>
                    </Input>
                    {this.renderActionOptions(action)}
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

    renderActionOptions(action) {
        if (action == 'show') {
            const state = this.state.state || this.props.event.state
            const position = this.state.position || this.props.event.position

            return (
                <div>
                    <Input
                        onChange={this.handleStateChange}
                        type="select" label="State" value={state}
                    >
                        <option value="default">default</option>
                    </Input>
                    <Input label="Position">
                        <Row>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handlePositionChange}
                                    name="position" type="radio" value="x-left"
                                    label={<span>Left<sup>2</sup></span>}
                                    checked={position == 'x-left'}
                                />
                            </Col>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handlePositionChange}
                                    name="position" type="radio" value="left"
                                    label="Left"
                                    checked={position == 'left'}
                                />
                            </Col>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handlePositionChange}
                                    name="position" type="radio" value="center"
                                    label="Center"
                                    checked={position == 'center'}
                                />
                            </Col>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handlePositionChange}
                                    name="position" type="radio" value="right"
                                    label="Right"
                                    checked={position == 'right'}
                                />
                            </Col>
                            <Col xs={2}>
                                <Input
                                    onChange={this.handlePositionChange}
                                    name="position" type="radio" value="x-right"
                                    label={<span>Right<sup>2</sup></span>}
                                    checked={position == 'x-rightr'}
                                />
                            </Col>
                        </Row>
                    </Input>
                </div>
            )
        } else {
            return null
        }
    }
}

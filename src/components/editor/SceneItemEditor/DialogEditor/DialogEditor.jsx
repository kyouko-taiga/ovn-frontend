import React from 'react'
import {Panel, Input, ButtonToolbar, Button} from 'react-bootstrap'

import {updateItem, deleteItem} from '../../../../actions/sceneActions'


export default class DialogEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            character: null,
            text: null
        }

        this.reset = this.reset.bind(this)
        this.submit = this.submit.bind(this)
        this.delete = this.delete.bind(this)

        this.handleCharacterChange = this.handleCharacterChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    componentWillReceiveProps(props) {
        if (props.dialog != this.props.dialog) {
            this.setState({
                character: null,
                text: null
            })
        }
    }

    reset() {
        const character = this.props.dialog
            ? this.props.dialog.character
            : null
        const text = this.props.dialog
            ? this.props.dialog.text
            : null

        this.setState({
            character: character,
            text: text
        })
    }

    submit() {
        // If we don't select any value for the dialog's character when we
        // submit the form, we'll store the value `null` while the user may
        // think he saved the first displayed value of the select input. A
        // simple workaround is to simply default to the displayed value.
        let character = this.state.character || this.props.dialog.character
        if (character === null) {
            character = this.refs.character.getValue()
        }

        updateItem(
            this.props.dialog.uid,
            {
                character: character,
                text: this.state.text || this.props.dialog.text
            }
        )

        this.setState({
            character: null,
            text: null
        })
    }

    delete() {
        deleteItem(this.props.dialog.uid)
    }

    handleCharacterChange(e) {
        this.setState({character: e.target.value})
    }

    handleTextChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        const characterOptions = this.props.characterOptions.map((character, index) => {
            return <option key={index} value={character.uid}>{character.name}</option>
        })

        const character = this.state.character || this.props.dialog.character
        const text = this.state.text || this.props.dialog.text

        return (
            <Panel header="Dialog editor">
                <form>
                    <Input
                        onChange={this.handleCharacterChange}
                        ref="character"
                        type="select" label="Character"
                        value={character}
                    >
                        {characterOptions}
                    </Input>
                    <Input
                        onChange={this.handleTextChange}
                        type="textarea" label="Dialog"
                        placeholder="Write the character's text here."
                        value={text}
                    />
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

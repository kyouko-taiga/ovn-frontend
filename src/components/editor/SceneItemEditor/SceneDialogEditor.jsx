import React from 'react'
import {Panel, Input, ButtonToolbar, Button} from 'react-bootstrap'


export default class SceneDialogItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            character: null,
            text: null
        }

        this.reset = this.reset.bind(this)

        this.handleCharacterChange = this.handleCharacterChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
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

    handleCharacterChange(e) {
        this.setState({character: e.target.value})
    }

    handleTextChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        const character = this.state.character || this.props.dialog.character
        const text = this.state.text || this.props.dialog.text

        return (
            <Panel header="Dialog editor">
                <form>
                    <Input
                        onChange={this.handleCharacterChange}
                        type="select" label="Character"
                        value={character}
                    >
                        <option value="Tsukihi">Tsukihi</option>
                        <option value="Karen">Karen</option>
                    </Input>
                    <Input
                        onChange={this.handleTextChange}
                        type="textarea" label="Dialog"
                        placeholder="Write the character's text here."
                        value={text}
                    />
                    <div className="clearfix">
                        <div className="pull-left">
                            <Button bsStyle="danger">Delete</Button>
                        </div>
                        <div className="pull-right">
                            <ButtonToolbar>
                                <Button onClick={this.reset} bsStyle="default">Reset</Button>
                                <Button bsStyle="primary">Save</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </form>
            </Panel>
        )
    }
}

import React from 'react'
import {Panel, Input, ButtonToolbar, Button} from 'react-bootstrap'

import {updateScene, deleteScene} from '../../../actions/sceneActions'

import BackgroundInput from './BackgroundInput'


export default class SceneEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            background: null
        }

        this.reset = this.reset.bind(this)
        this.submit = this.submit.bind(this)
        this.delete = this.delete.bind(this)

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this)
    }

    reset() {
        if (this.props.scene) {
            this.setState({
                name: this.props.scene.name,
                background: this.props.scene.background
            })
        } else {
            this.setState({
                name: null,
                background: null
            })
        }
    }

    submit() {
        updateScene(
            this.props.scene.uid,
            {
                name: this.state.name || this.props.scene.name,
                background: this.state.background || this.props.scene.background
            }
        )

        this.setState({
            name: null,
            background: null
        })
    }

    delete() {
        deleteScene(this.props.scene.uid)
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleBackgroundChange(background) {
        this.setState({background: background})
    }

    render() {
        const name = this.state.name || this.props.scene.name
        const background = this.state.background || this.props.scene.background

        return (
            <Panel header="Scene editor">
                <form>
                    <Input
                        onChange={this.handleNameChange}
                        label="Scene name" type="text" value={name}
                    />
                    <BackgroundInput
                        onChange={this.handleBackgroundChange}
                        label="Scene background"
                        help="Click on the image above to change the scene background."
                        value={background}
                    />
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

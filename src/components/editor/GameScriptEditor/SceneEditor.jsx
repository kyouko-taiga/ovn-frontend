import React from 'react'
import {Button, ButtonToolbar, ListGroup} from 'react-bootstrap'

import {createItem} from '../../../actions/sceneActions'

import CollapsiblePanel from '../../common/CollapsiblePanel'

import SceneItemContainer from './SceneItemContainer'


export default class SceneEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: true
        }

        this.expand = this.expand.bind(this)
        this.collapse = this.collapse.bind(this)

        this.createDialog = this.createDialog.bind(this)
        this.createSound = this.createSound.bind(this)
        this.createCharacterAction = this.createCharacterAction.bind(this)
    }

    expand() {
        this.setState({collapsed: false})
    }

    collapse() {
        this.setState({collapsed: true})
    }

    createDialog() {
        const uid = createItem({
            scene_uid: this.props.scene.uid,
            type: 'dialog',
            character: null,
            text: ''
        })

        // Navigate to the freshly created item.
        this.context.router.push(`/editor/${this.props.game.uid}/${this.props.scene.uid}/${uid}`)
    }

    createSound() {
        const uid = createItem({
            scene_uid: this.props.scene.uid,
            type: 'sound',
            sound: null,
            volume: 100,
            repeat: false
        })

        // Navigate to the freshly created item.
        this.context.router.push(`/editor/${this.props.game.uid}/${this.props.scene.uid}/${uid}`)
    }

    createCharacterAction() {
        const uid = createItem({
            scene_uid: this.props.scene.uid,
            type: 'character',
            action: 'show',
            character: null,
            state: 'default',
            position: 'center'
        })

        // Navigate to the freshly created item.
        this.context.router.push(`/editor/${this.props.game.uid}/${this.props.scene.uid}/${uid}`)
    }

    render() {
        return (
            <CollapsiblePanel
                onExpand={this.expand}
                onCollapse={this.collapse}
                heading={this.props.scene.title}
                collapsed={this.state.collapsed}
            >
                {this.renderSceneItems()}
                <div className="panel-body">
                    <div className="text-center">
                        <ButtonToolbar className="ovn-scene-toolbar">
                            <Button onClick={this.createDialog} bsStyle="info">
                                <i className="fa fa-fw fa-lg fa-comment" />
                            </Button>
                            <Button onClick={this.createSound} bsStyle="success">
                                <i className="fa fa-fw fa-lg fa-music" />
                            </Button>
                            <Button bsStyle="danger">
                                <i className="fa fa-fw fa-lg fa-picture-o" />
                            </Button>
                            <Button onClick={this.createCharacterAction} bsStyle="warning">
                                <i className="fa fa-fw fa-lg fa-user" />
                            </Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </CollapsiblePanel>
        )
    }

    renderSceneItems() {
        const items = this.props.scene.items.map((uid, index) => {
            return (
                <SceneItemContainer
                    key={index}
                    game={this.props.game} scene={this.props.scene} itemuid={uid}
                />
            )
        })

        return <ListGroup>{items}</ListGroup>
    }
}

SceneEditor.contextTypes = {
    router: React.PropTypes.object.isRequired
}
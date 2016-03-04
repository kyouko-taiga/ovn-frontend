import React from 'react'
import {Button, ButtonToolbar, ListGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import {createItem} from '../../../actions/sceneActions'

import CollapsiblePanel from '../../common/CollapsiblePanel'

import SceneItemContainer from './SceneItemContainer'
import ScenePreview from './ScenePreview'


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

    createSceneItem(item) {
        // Create the new item.
        const uid = createItem(item)

        // Navigate to its view.
        const url = `/editor/${this.props.game.uid}/${this.props.scene.uid}/items/${uid}`
        this.context.router.push(url)
    }

    createDialog() {
        this.createSceneItem({
            scene_uid: this.props.scene.uid,
            type: 'dialog',
            character: null,
            text: ''
        })
    }

    createSound() {
        this.createSceneItem({
            scene_uid: this.props.scene.uid,
            type: 'sound',
            sound: null,
            volume: 100,
            repeat: false
        })
    }

    createCharacterAction() {
        this.createSceneItem({
            scene_uid: this.props.scene.uid,
            type: 'character',
            action: 'show',
            character: null,
            state: 'default',
            position: 'center'
        })
    }

    render() {
        const scene = this.props.scene
        const settings_url = `/editor/${scene.game_uid}/${scene.uid}/settings`

        return (
            <CollapsiblePanel
                onExpand={this.expand}
                onCollapse={this.collapse}
                heading={scene.name}
                collapsed={this.state.collapsed}
            >
                <div className="panel-body">
                    <ScenePreview scene={scene} />
                </div>
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
                            <Button onClick={this.createCharacterAction} bsStyle="warning">
                                <i className="fa fa-fw fa-lg fa-user" />
                            </Button>
                            <LinkContainer to={settings_url}>
                                <Button bsStyle="default">
                                    <i className="fa fa-fw fa-lg fa-cog" />
                                </Button>
                            </LinkContainer>
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
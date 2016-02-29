import React from 'react'
import {Button, ButtonToolbar, ListGroup} from 'react-bootstrap'

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
    }

    expand() {
        this.setState({collapsed: false})
    }

    collapse() {
        this.setState({collapsed: true})
    }

    render() {
        return (
            <CollapsiblePanel
                onExpand={this.expand}
                onCollapse={this.collapse}
                heading={this.props.scene.title}
                collapsed={this.state.collapsed}
            >
                {this.renderSceneData()}
                <div className="panel-body">
                    <div className="text-center">
                        <ButtonToolbar className="ovn-scene-toolbar">
                            <Button bsStyle="info">
                                <i className="fa fa-fw fa-lg fa-comment" />
                            </Button>
                            <Button bsStyle="success">
                                <i className="fa fa-fw fa-lg fa-music" />
                            </Button>
                            <Button bsStyle="danger">
                                <i className="fa fa-fw fa-lg fa-picture-o" />
                            </Button>
                            <Button bsStyle="warning">
                                <i className="fa fa-fw fa-lg fa-bolt" />
                            </Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </CollapsiblePanel>
        )
    }

    renderSceneData() {
        const scene = this.props.scene
        const items = scene.items.map((uid, index) => {
            return (
                <SceneItemContainer
                    key={index}
                    gameuid={scene.game_uid} sceneuid={scene.uid} itemuid={uid}
                />
            )
        })

        return <ListGroup>{items}</ListGroup>
    }
}

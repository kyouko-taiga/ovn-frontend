import React from 'react'
import {ListGroup} from 'react-bootstrap'

import CollapsiblePanel from '../../common/CollapsiblePanel'

import SceneDialogItem from './SceneDialogItem'
import SceneEventItem from './SceneEventItem'
import SceneImageItem from './SceneImageItem'
import SceneSoundItem from './SceneSoundItem'


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
                heading="Scene 1"
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
        const items = this.props.scene.data.map((item, index) => {
            switch (item.type) {
            case 'dialog':
                return <SceneDialogItem key={index} dialog={item} />
            case 'event':
                return <SceneEventItem key={index} event={item} />
            case 'image':
                return <SceneImageItem key={index} image={item} />
            case 'sound':
                return <SceneSoundItem key={index} sound={item} />
            default:
                return null
            }
        })

        return <ListGroup>{items}</ListGroup>
    }
}

import React from 'react'
import {findDOMNode} from 'react-dom'


export default class CollapsiblePanel extends React.Component {
    componentDidMount() {
        if (this.props.collapsed) {
            let wrapper = findDOMNode(this.refs.contentWrapper)
            wrapper.style.height = 0
        }
    }

    componentDidUpdate() {
        let wrapper = findDOMNode(this.refs.contentWrapper)
        let content = findDOMNode(this.refs.content)

        wrapper.style.height = this.props.collapsed
            ? 0
            : content.clientHeight + 'px'
    }

    render() {
        const panel_classname = this.props.collapsed
            ? 'panel panel-default ovn-panel-collapsible ovn-collapsed'
            : 'panel panel-default ovn-panel-collapsible'

        const caret_classname = this.props.collapsed
            ? 'fa fa-plus-square'
            : 'fa fa-minus-square'

        const callback = this.props.collapsed
            ? this.props.onExpand
            : this.props.onCollapse

        // Note that we don't use react-bootstrap's Panel component, because
        // we can't make a proper use of the "panel-heading" class with it.
        // See github.com/react-bootstrap/react-bootstrap/issues/983

        return (
            <div className={panel_classname}>
                <div onClick={callback} className="panel-heading">
                    <div className="clearfix">
                        <div className="pull-left">
                            {this.props.heading}
                        </div>
                        <div className="pull-right">
                            <i className={caret_classname} />
                        </div>
                    </div>
                </div>
                <div ref="contentWrapper" className="ovn-panel-content-wrapper">
                    <div ref="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

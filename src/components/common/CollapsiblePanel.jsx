import React from 'react'


export default class CollapsiblePanel extends React.Component {
    render() {
        const caret_classname = this.props.collapsed
            ? 'fa fa-caret-right'
            : 'fa fa-caret-down'

        const callback = this.props.collapsed
            ? this.props.onExpand
            : this.props.onCollapse

        const children = this.props.collapsed
            ? null
            : this.props.children

        // Note that we don't use react-bootstrap's Panel component, because
        // we can't make a proper use of the "panel-heading" class with it.
        // See github.com/react-bootstrap/react-bootstrap/issues/983

        return (
            <div className="panel panel-default ovn-panel-collapsible">
                <div onClick={callback} className="panel-heading">
                    <div className="clearfix">
                        <div className="pull-left">
                            {this.props.heading}
                        </div>
                        <div className="pull-right">
                            <i className={caret_classname}></i>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        )
    }
}

CollapsiblePanel.defaultProps = {
    collapsed: false,
    heading: ''
}

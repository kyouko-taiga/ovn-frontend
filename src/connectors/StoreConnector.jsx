import React from 'react'


/**
    Higher order component that connects a component to a store.
    
    :param ComposedComponent:
        The component to enhance.
    :param store:
        The store to connect
    :param storeHandler:
        A function (props) => object that takes the component props and
        returns the new props to get from the store.
    
    .. code-block:: js
        import StoreConnector from 'StoreConnector'

        const MyComponentWithStore = StoreConnector(
            class MyComponent extends React.Component {
                // can access this.props.val
            },
            SomeStore, (props) => ({val = SomeStore.getVal(props.id)})
        )
 */
export default (ComposedComponent, store, storeHandler) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = storeHandler(this.props)

        this.handleStoreChange = this.handleStoreChange.bind(this)
    }

    componentDidMount() {
        store.addChangeListener(this.handleStoreChange)
    }

    componentWillUnmount() {
        store.removeChangeListener(this.handleStoreChange)
    }

    componentWillReceiveProps(props) {
        this.setState(storeHandler(props))
    }

    handleStoreChange() {
        this.setState(storeHandler(this.props))
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} />
    }
}

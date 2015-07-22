import React, { Component } from 'react';
class CollectionView extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            collections: []
        };
        this.props.flux.getStore('CollectionsStore').listen(this.onCollectionStoreChange.bind(this));
    }

    onCollectionStoreChange() {
        const collectionsStoreState = this.props.flux.getStore('CollectionsStore').getState();
        this.setState({ collections: collectionsStoreState.collections });
    }

    render() {
        return (<h1>Hello, world! { this.state.collections }</h1>);
    }
}

export default CollectionView;

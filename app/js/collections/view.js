import React, { Component } from 'react';
class CollectionView extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.flux.getStore('CollectionsStore').getState();
    }

    componentDidMount() {
        this.onCollectionStoreChange();
        this.props.flux.getStore('CollectionsStore').listen(this.onCollectionStoreChange.bind(this));
        this.props.flux.getActions('CollectionsActions').loadCollections();
    }

    componentWillUnmount() {
        this.props.flux.getStore('CollectionsStore').unlisten(this.onCollectionStoreChange.bind(this));
    }

    onCollectionStoreChange() {
        const collectionsStoreState = this.props.flux.getStore('CollectionsStore').getState();
        this.setState({ collections: collectionsStoreState.collections });
        // this.setState({ collections: [ { label: 'test'} ] });
        // console.log('this.state', this.state);
    }

    render() {
        // console.log('render this.state', this.state);
        return (
            <div>
                <h1>Hello, world! { this.state.collections[ 0 ].label }</h1>
                <h2>Count: { this.state.collections[ 0 ].count }</h2>
            </div>
        );
    }
}

export default CollectionView;

// import CollectionView from './CollectionView.jsx';
//
// class PageScaffold extends Component {
//     render() {
//         const snapshot = this.props.flux.takeSnapshot();
//         return (
//             <div>
//                 <CollectionView flux={ this.props.flux }/>
//                 <script dangerouslySetInnerHtml={{
//                     window.ALT_SNAPSHOT = JSON.stringify(snapshot);
//                 }}/>
//             </div>
//         );
//     }
// }

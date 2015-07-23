import alt from 'alt';

class CollectionsStore {
    constructor() {
        this.collections = [ {
            label: 'no collection yet',
            count: 0
        } ];
        const actions = this.alt.getActions('CollectionsActions');
        console.log('actions.LOAD_COLLECTIONS_SUCCESS', actions.LOAD_COLLECTIONS_SUCCESS);
        this.bindActions(actions);
        // this.bindListeners({
        //     onLoadCollectionsSuccess: actions.LOAD_COLLECTIONS_SUCCESS
        // });

        console.log(actions);
        // actions.loadCollections();
    }

    onLoadCollectionsSuccess(collections) {
        console.log('store:onLoadCollectionsSuccess');
        console.log(collections);
        this.setState({ collections });
    }

    onLoadCollectionsFailure(collections) {
        console.log('store:onLoadCollectionsFailure');
        console.log(collections);
        this.setState({ collections });
    }
}

export default CollectionsStore;

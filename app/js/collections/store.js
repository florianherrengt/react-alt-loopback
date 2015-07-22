class CollectionsStore {
    constructor() {
        this.collections = [];
        const actions = this.alt.getActions('CollectionsActions');
        console.log(actions);
        this.bindListeners({
            onLoadCollectionsSuccess: actions.LOAD_COLLECTION_SUCCESS
        });
    }

    onLoadCollectionsSuccess(collections) {
        this.setState({ collections });
    }
}

export default CollectionsStore;

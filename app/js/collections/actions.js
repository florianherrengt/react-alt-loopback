class CollectionsActions {
    constructor() {
        this.generateActions(
            // 'loadCollections',
            'loadCollectionsFailure',
            'loadCollectionsSuccess'
        );
    }

    loadCollections() {
        this.actions.loadCollectionsSuccess([ { label: 'test' } ]);
    }

    loadCollectionsSuccess() {

    }

    loadCollectionsFailure() {

    }
}

export default CollectionsActions;

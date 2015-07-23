import request from 'superagent';

class CollectionsActions {
    constructor() {
        this.generateActions(
            'loadCollectionsFailure',
            'loadCollectionsSuccess'
        );
    }

    loadCollections() {
        request
            .get('/data.json')
            .end((error, data) => {
                this.actions.loadCollectionsSuccess(JSON.parse(data.text));
            });
        console.log('actions:loadCollections');
        console.log(this);
        // this.actions.loadCollectionsSuccess({
        //     collections: [ {
        //         label: 'test',
        //         count: 10
        //     } ]
        // });
        this.actions.loadCollectionsSuccess();
    }
}

export default CollectionsActions;

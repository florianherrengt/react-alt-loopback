import Alt from 'alt';
import CollectionsActions from './actions';
import CollectionsStore from './store';
class CollectionFlux extends Alt {
    constructor() {
        super();
        console.log('flux');
        console.log('CollectionsActions', CollectionsActions);
        console.log('CollectionsStore', CollectionsStore);
        this.addActions('CollectionsActions', CollectionsActions);
        this.addStore('CollectionsStore', CollectionsStore);
    }
}

export default CollectionFlux;

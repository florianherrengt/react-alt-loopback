import React from 'react';
import CollectionsView from './collections/view';
import CollectionsFlux from './collections/flux';

// React.createElement(CollectionView({ flux: new CollectionsFlux() }))
// const collectionsView = new CollectionsView({ flux: new CollectionsFlux() });
React.render(<CollectionsView flux={ new CollectionsFlux() } />, document.getElementById('container'));
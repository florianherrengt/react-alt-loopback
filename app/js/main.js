import React from 'react';
import CollectionView from './collections/view';
import CollectionsFlux from './collections/flux';

React.render(<CollectionView flux={ new CollectionsFlux() } />, document.getElementById('container'));

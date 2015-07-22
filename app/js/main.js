import React from 'react';
import CollectionView from './collections/view';
import CollectionsFlux from './collections/flux';

// const element = React.createElement(CollectionView, {});
React.render(CollectionView, { flux: new CollectionsFlux() }, document.querySelector('body'));

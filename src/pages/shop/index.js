import React, { useState } from "react";
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection';

function Shop(props) {
  return (
    <div>
      <Route exact path={props.match.path} component={CollectionOverview} />
      <Route exact path={`${props.match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default Shop;

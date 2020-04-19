import React from 'react';
import { connect } from 'react-redux'
import CollectionPreview from "../collection-preview";

import './style.scss';

function CollectionOverview({collections}){
    return(
        <div className="collections-overview">
            {collections.map(({ id, ...restShopcollectionsProps }) => (
                <CollectionPreview key={id} {...restShopcollectionsProps} />
            ))}
        </div>
    )
}

const mapStateToProps=({ shop })=>{
    const {collections} = shop
    return{
      collections: Object.keys(collections).map(key=>collections[key])
    }
  }
  
export default connect(mapStateToProps)(CollectionOverview);

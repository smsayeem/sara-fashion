import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../../components/collection-item'

import './style.scss'

function CollectionPage(props){
    const { match, collections } = props;
        return(
            <div className='collection-page'>
                <div className='title'>{collections.title}</div>
                <div className="items">
                { collections.items.map(item=><CollectionItem key={item.id} item={item}/>)}
                </div>
            </div>
        )
}

const mapStateToProps=(state, ownProps)=>{
    return{
        collections: state.shop.collections[ownProps.match.params.collectionId]
    }
}

export default withRouter(connect(mapStateToProps)(CollectionPage));

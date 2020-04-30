import React, { useEffect} from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollecionOverViewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container"

import {fetchCollectionsSuccess} from "../../redux/shop/shop.actions"

const ShopPage = (props) => {
    const { match ,fetchCollectionsSuccess} = props
    useEffect(() => {
        fetchCollectionsSuccess()
        
    },[])
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollecionOverViewContainer}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
       </div>
    )  
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsSuccess:()=>dispatch(fetchCollectionsSuccess())
})



export default connect(null,mapDispatchToProps)(ShopPage);
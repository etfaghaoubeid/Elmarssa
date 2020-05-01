import React, { useEffect} from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollecionOverViewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container"
import {ShopPageContainer} from "./shop.styles"
import {startFetchCollections} from "../../redux/shop/shop.actions"

const ShopPage = (props) => {
    const { match ,startFetchCollections} = props
    useEffect(() => {
        startFetchCollections()
        
    },[])
    return(
        <ShopPageContainer>
            <Route exact path={`${match.path}`} component={CollecionOverViewContainer}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
       </ShopPageContainer>
    )  
}
const mapDispatchToProps = dispatch => ({
    startFetchCollections:()=>dispatch(startFetchCollections())
})
export default connect(null,mapDispatchToProps)(ShopPage);
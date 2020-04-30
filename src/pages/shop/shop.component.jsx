import React, { useEffect} from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect"
import { Route } from "react-router-dom";
import { selectFetching } from "../../redux/shop/shop.selectors"
import {fetchCollectionsSuccess} from "../../redux/shop/shop.actions"


import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = (props) => {
    const { match ,fetching,fetchCollectionsSuccess} = props
    useEffect(() => {
        fetchCollectionsSuccess()
        
    },[])
    return(
        <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={fetching} {...props} />}/>
        <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={fetching} {...props} />} />
       </div>
    )  
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsSuccess:()=>dispatch(fetchCollectionsSuccess())
})
const mapStateToProps = createStructuredSelector({
    fetching:selectFetching

})


export default connect(mapStateToProps ,mapDispatchToProps)(ShopPage);
import React from "react";
import {connect} from  "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component"

const CollectionsOverview = ({collections})=>(
    <div className="collections-overview">
                {collections.map(({id, ...OtherCollectionProps})=><CollectionPreview key={id} {...OtherCollectionProps} />)}
         
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectShopCollections
})

export default connect(mapStateToProps)( CollectionsOverview);
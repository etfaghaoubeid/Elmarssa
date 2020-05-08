import React from "react";
import {connect} from  "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component"

import {CollectionOverviewContainer  } from "./collection-overview.styles";
import {selectShopCollectionForCollectionOverview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections})=>(
    <CollectionOverviewContainer>
                {collections.map(({id, ...OtherCollectionProps})=><CollectionPreview key={id} {...OtherCollectionProps} />)}
         
    </CollectionOverviewContainer>
)
const mapStateToProps = createStructuredSelector({
    collections:selectShopCollectionForCollectionOverview
})

export default connect(mapStateToProps)( CollectionsOverview);
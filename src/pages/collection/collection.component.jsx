import React from "react";
import { connect } from "react-redux";
import {CollectionContainer, Title,ItemsContainer} from "./collection.styles"
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPage = ({ collection }) => {
 const {items, title}=  collection
return (
    <CollectionContainer>
        <Title>{title}</Title>
        <ItemsContainer className="items">
           {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
        </ItemsContainer>
       
    </CollectionContainer>
)}
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage); 
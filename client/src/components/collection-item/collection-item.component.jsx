import React from "react"; 
import { connect } from "react-redux";

import {CollectionItemContainer,Image ,CollectionFooter, Name, Price,Button}from "./collection-item.styles"

import {addItem} from "../../redux/cart/cart.actions"

const CollectionItem = ({ item, addItem }) => {
const {imageUrl , name , price}= item
  return(
    <CollectionItemContainer>
      <Image className="image" imageUrl={imageUrl}/>
    <CollectionFooter>
      <Name >{name}</Name>
      <Price >{price}</Price>
    </CollectionFooter>
    <Button inverted onClick={()=>addItem(item)}>ADD TO CART </Button>
  </CollectionItemContainer>
 ) 

}

const mapDispatchToProps = dispatch=>({
  addItem:item=>dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem) ;
import React from "react";
import {connect} from "react-redux";
import {selectCollections} from "../../redux/shop/shop.selectors"
import "./collection.styles.scss"

const CollectionPage = ({match,collection})=>{

    console.log(match.params);
    
return (
    <div className="category">
       <h1>Collection</h1>
       {/* {collection.map(item=>(<CollectionItem key={item.id} item={item}/>))} */}
       
    </div>
)}
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollections(ownProps.match.params)(state)

})
export default connect(mapStateToProps)(CollectionPage); 
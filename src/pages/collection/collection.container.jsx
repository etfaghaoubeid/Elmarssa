import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"
import { selectFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors"


import CollectionPage from "./collection.component"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
const mapStateToProps = createStructuredSelector({
    fetching: selectFetching,
    isLoading:state=>!selectIsCollectionLoaded(state)

})
const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner

)(CollectionPage)
export default CollectionPageContainer;
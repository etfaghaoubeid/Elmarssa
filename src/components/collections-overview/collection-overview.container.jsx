import { connect } from "react-redux";
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import { selectFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors"

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    fetching: selectFetching,
    isCollectionLoaded:selectIsCollectionLoaded

})
const CollecionOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,

)(CollectionsOverview)
export default CollecionOverViewContainer;
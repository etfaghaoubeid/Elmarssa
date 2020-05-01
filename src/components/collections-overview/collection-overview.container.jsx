import { connect } from "react-redux";
import { compose } from "redux"

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

import { createStructuredSelector } from "reselect"
import { selectFetching, } from "../../redux/shop/shop.selectors"

const mapStateToProps = createStructuredSelector({
    isLoading:selectFetching

})
const CollecionOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,

)(CollectionsOverview)
export default CollecionOverViewContainer;
import {
    START_FETCH_COLLECECTIONS,
    FETCH_COLLECECTIONS_SUCCESS,
    FETCH_COLLECECTIONS_FAILURE
} from "./shop.action.types"
import {
    firestore,
    convetCollectionsSnapshotToMap
} from "../../firebase/firebase.utils"


export const startFetchCollections = () => ({
    type:START_FETCH_COLLECECTIONS,
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: FETCH_COLLECECTIONS_FAILURE,
    message:errorMessage
})

export const fetchCollectionsSuccess = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(startFetchCollections())
        collectionRef.get()
            .then(snapshot => {
                const collectionMap = convetCollectionsSnapshotToMap(snapshot)
                dispatch({
                    type: FETCH_COLLECECTIONS_SUCCESS,
                    payload:collectionMap
                })
            })
        .catch(err=>dispatch(fetchCollectionsFailure(err.message)))
    }
}

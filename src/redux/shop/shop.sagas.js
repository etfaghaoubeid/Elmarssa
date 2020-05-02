import { takeLatest, call, put ,all} from "redux-saga/effects"
import {fetchCollectionsSuccess,fetchCollectionsFailure} from "./shop.actions"
import {convetCollectionsSnapshotToMap,firestore} from "../../firebase/firebase.utils"
import { START_FETCH_COLLECECTIONS ,FETCH_COLLECECTIONS_SUCCESS} from "./shop.action.types"
export function* fetchCollectionsAsync() {
    try {
        const collectionRef = yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convetCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))
    } catch (err) { yield put(fetchCollectionsFailure(err.message)) }
}

export function* fetchCollectionsStart() {
    yield takeLatest(START_FETCH_COLLECECTIONS,fetchCollectionsAsync)
}
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}
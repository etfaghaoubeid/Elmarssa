import { put,  takeLatest, all,call} from "redux-saga/effects"
import {auth, googleProvider, createUserProfileDocument} from "../../firebase/firebase.utils"
import {
    signInSuccess,
    signInFailure
} from "./user.actions"
import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_FAILURE,
    GOOGLE_SIGN_IN_START,
    GOOGLE_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_START,
    EMAIL_SIGN_IN_SUCCESS
} from "./user.action.types"
function* getSnapshotFromUserAuth(userAuth, aditionalData) {
    try {
        const userRef = yield call(createUserProfileDocument,userAuth, aditionalData)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id,...userSnapshot.data()}))
        
    }catch(error){yield put(signInFailure(error.message))}
    
}
function* googleSignInStart() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
        
    }catch(error){yield put(signInFailure(error.message))}
    
}

export function* startSignInWithEmail({payload:{email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    }catch(error){yield put(signInFailure(error.message))}

}
export function* signInWithEmail() {
    yield takeLatest(EMAIL_SIGN_IN_START , startSignInWithEmail)
}
export function* signInWithGoogle() {
    yield takeLatest(GOOGLE_SIGN_IN_START , googleSignInStart)
}
export function* userSagas() {
    yield all([call(signInWithGoogle),call(signInWithEmail)])
}
import { put,  takeLatest, all,call} from "redux-saga/effects"
import {auth, googleProvider, createUserProfileDocument} from "../../firebase/firebase.utils"
import {
    signInSuccess,
    signInFailure,
    signOutFailure,
    signOutSuccess
    
} from "./user.actions"
import {startClearCart} from "../cart/cart.actions"
import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_FAILURE,
    GOOGLE_SIGN_IN_START,
    GOOGLE_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_START,
    EMAIL_SIGN_IN_SUCCESS,
    START_SIGN_OUT
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
function* startSignOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
        
    }catch(err){yield put(signOutFailure())}
    
}
export function* signOut() {
    yield takeLatest(START_SIGN_OUT, startSignOut)
}
export function* signInWithEmail() {
    yield takeLatest(EMAIL_SIGN_IN_START , startSignInWithEmail)
}
export function* signInWithGoogle() {
    yield takeLatest(GOOGLE_SIGN_IN_START , googleSignInStart)
}
export function* userSagas() {
    yield all([call(signInWithGoogle),call(signInWithEmail), call(signOut)])
}
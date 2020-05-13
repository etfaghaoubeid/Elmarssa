import { put, all, call, takeLatest } from "redux-saga/effects"
import {SIGN_OUT_SUCCESS} from "../user/user.action.types"
import {clearCartSuccess,clearCartFalure} from "./cart.actions"
export function* clearCart() {
    try {
        yield put(clearCartSuccess())
    }catch(error){yield put(clearCartFalure(error.message))}
}
export function* startClearCart() {
    yield  takeLatest(SIGN_OUT_SUCCESS,clearCart)
}
export function* cartSagas() {
    yield all([call(startClearCart)])
}
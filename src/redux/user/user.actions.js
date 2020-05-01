import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_FAILURE,
    GOOGLE_SIGN_IN_START,
    GOOGLE_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_START,
    EMAIL_SIGN_IN_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE
} from "./user.action.types"

export const setCurrentUser = user => ({
    type:SET_CURRENT_USER,
    payload:user
})
export const signInFailure = (message)=>({
    type:SIGN_IN_FAILURE,
    payload:message
})
export const googleSignInStart = ()=>({
    type:GOOGLE_SIGN_IN_START,
})
export const signInSuccess = user=>({
    type:SIGN_IN_SUCCESS,
    payload:user
})

export const emailSignInFailure = (message)=>({
    type:EMAIL_SIGN_IN_FAILURE,
    payload:message
})
export const emailSignInStart = (emailAndPassword)=>({
    type: EMAIL_SIGN_IN_START,
    payload:emailAndPassword
    
})
export const emailSignInSuccess = user=>({
    type:EMAIL_SIGN_IN_SUCCESS,
    payload:user
})
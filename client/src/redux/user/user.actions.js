import {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    START_SIGN_OUT,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS,
    START_SIGN_UP,
    SIGN_OUT_FAILURE
} from "./user.action.types"

export const startSignOut = ()=> ({
    type:START_SIGN_OUT
})
export const signOutFailure = (erroMessage)=> ({
    type: SIGN_OUT_FAILURE,
    payload:erroMessage
})
export const signOutSuccess = ()=> ({
    type:SIGN_OUT_SUCCESS
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
    type:SIGN_UP_SUCCESS,
    payload:user
})
export const signUpFailure = (message)=>({
    type:SIGN_UP_FAILURE,
    payload:message
})
export const signUpStart = (user)=>({
    type: START_SIGN_UP,
    payload:user
    
})
export const signUpSuccess = ({user, additionalData})=>({
    type:SIGN_UP_SUCCESS,
    payload:{user ,additionalData}
})
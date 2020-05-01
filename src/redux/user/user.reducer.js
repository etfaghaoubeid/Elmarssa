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
const initState= {
    currentUser: null,
    errorMessage:null

}

export default function userReducer(state =initState, action ){
    switch (action.type) {
        case GOOGLE_SIGN_IN_START:
        case EMAIL_SIGN_IN_START:    
            return {
                ...state,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage:null
                
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                errorMessage:action.payload
            }
        
        default:
        return state;
    }
}
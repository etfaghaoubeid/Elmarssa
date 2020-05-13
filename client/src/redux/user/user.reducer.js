import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    START_SIGN_UP,
    SIGN_UP_SUCCESS
} from "./user.action.types"
const initState= {
    currentUser: null,
    errorMessage:null

}

export default function userReducer(state =initState, action ){
    switch (action.type) {
        case GOOGLE_SIGN_IN_START:
        case EMAIL_SIGN_IN_START:   
        case  START_SIGN_UP:     
            return {
                ...state,
            }
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:    
            return {
                ...state,
                currentUser: action.payload,
                errorMessage:null
            }
       
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser:null,
                errorMessage:null
            }
        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE: 
        case SIGN_UP_FAILURE:    
            return {
                ...state,
                errorMessage:action.payload
            }
        
        default:
        return state;
    }
}
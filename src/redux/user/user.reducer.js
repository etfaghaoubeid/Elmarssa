import {SET_CURRENT_USER} from "./user.action.types"
const initState= {
    currentUser:null

}

export default function userReducer(state =initState, action ){
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state , 
                currentUser:action.payload
            }
        default:
        return state;
    }
}
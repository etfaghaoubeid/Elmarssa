import {
  START_FETCH_COLLECECTIONS,
  FETCH_COLLECECTIONS_SUCCESS,
  FETCH_COLLECECTIONS_FAILURE
} from "./shop.action.types"
const initState = {
  collections: null,
  fetching: false,
  erro: ""
}
const shopReducer = (state=initState, action)=>{
  switch (action.type) {
    case START_FETCH_COLLECECTIONS:
      return {
        ...state,
        fetching: true,
        erroMessage: ""
      }
    case FETCH_COLLECECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        fetching:false
      }
    case FETCH_COLLECECTIONS_FAILURE:
      return {
        ...state,
        fetching: false,
        erroMessage:action.message
      }
    
      default:
        return state;
    }
}
export default shopReducer;
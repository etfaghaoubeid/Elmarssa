import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    DECREASE_ITEM,
    INCREASE_ITEM,
    START_CLEAR_CART,
    CLEAR_CART_FAILURE,
    CLEAR_CART_SACCESS
} from "./cart.action.types"
import {addItemToCart,removeItemFromCart,decreaseQuantity,increaseQuantity} from "./cart.utils";

const initState = {
    hidden:true,
    cartItems:[],
    count: 0,
    error:null
}
const cartReducer = (state = initState, action)=>{
    switch(action.type){
        case TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden, 
                error:null
            }
        case ADD_ITEM:
            return{
                ...state, 
                cartItems:addItemToCart( state.cartItems , action.payload),
                
            } 
        case REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }   
        case DECREASE_ITEM:
            return{
                ...state,
                cartItems:decreaseQuantity(state.cartItems, action.payload)
            }
        case INCREASE_ITEM:
            return{
                ...state,
                cartItems:increaseQuantity(state.cartItems, action.payload)
            }    
        case START_CLEAR_CART :
            return{
                ...state,  
            }  
        case CLEAR_CART_SACCESS :
            return{
                ...state, 
                cartItems:[]
            }  
        case CLEAR_CART_FAILURE :
            return{
                ...state, 
                error:action.payload
                
            }  
        default:
            return state;
        
    }
}
export default cartReducer;
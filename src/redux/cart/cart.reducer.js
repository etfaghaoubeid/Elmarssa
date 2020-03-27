import {TOGGLE_CART_HIDDEN, ADD_ITEM,REMOVE_ITEM,DECREASE_ITEM,INCREASE_ITEM} from "./cart.action.types"
import {addItemToCart,removeItemFromCart,decreaseQuantity,increaseQuantity} from "./cart.utils";

const initState = {
    hidden:true,
    cartItems:[],
    count:0
}
const cartReducer = (state = initState, action)=>{
    switch(action.type){
        case TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
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

        default:
            return state;
        
    }
}
export default cartReducer;
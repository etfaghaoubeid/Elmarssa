import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    DECREASE_ITEM,
    INCREASE_ITEM,
    START_CLEAR_CART,
    CLEAR_CART_FAILURE,
    CLEAR_CART_SACCESS
} from "./cart.action.types";

export const toggleCartHidden= ()=>({
    type:TOGGLE_CART_HIDDEN
});

export const addItem= item=>({
    type:ADD_ITEM,
    payload:item
})
export const removeItem= item=>({
    type:REMOVE_ITEM,
    payload:item
})
export const decreaseItem= item=>({
    type:DECREASE_ITEM,
    payload:item
})
export const increaseItem= item=>({
    type:INCREASE_ITEM,
    payload:item
})
export const startClearCart= ()=>({
    type:START_CLEAR_CART,
})
export const clearCartSuccess= ()=>({
    type:CLEAR_CART_SACCESS,
})

export const clearCartFalure= errorMassage=>({
    type: CLEAR_CART_FAILURE,
    payload: errorMassage
})
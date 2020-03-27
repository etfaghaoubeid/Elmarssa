export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existInCart = cartItems.find(item=> item.id === cartItemToAdd.id);
    if(existInCart){
       return cartItems.map((item, indx)=>
            item.id ===cartItemToAdd.id? {...item , quantity:item.quantity+1}: item)
    }
    return [...cartItems, {...cartItemToAdd ,quantity:1}]
   
}

export const increaseQuantity = (cartItems, cartItemToAdd)=>{
       return cartItems.map((item, indx)=>
            item.id ===cartItemToAdd.id? {...item , quantity:item.quantity+1}: item)

}
export const removeItemFromCart = (cartItems, itemToRemove)=>{
    return cartItems.filter(item=>item.id !==itemToRemove.id)
}
export const decreaseQuantity= (cartItems , itemToRemove)=>{
    const quantity = itemToRemove.quantity ;
    if(quantity===1){
        return cartItems.filter(item=>item.id!==itemToRemove.id)
    }
    return cartItems.map(item=>item.id === itemToRemove.id? {...item, quantity:item.quantity-1}:item)
}
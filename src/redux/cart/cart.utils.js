export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existInCart = cartItems.find(item=> item.id === cartItemToAdd.id);
    if(existInCart){
       return cartItems.map((item, indx)=>
            item.id ===cartItemToAdd.id? {...item , quantity:item.quantity+1}: item)
    }
    return [...cartItems, {...cartItemToAdd ,quantity:1}]
   
}
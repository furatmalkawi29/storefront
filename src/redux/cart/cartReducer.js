
let initialState = {
 products:[],
 cartCount : 0
}

function cartReducer(state = initialState,action) {

  
  switch (action.type) {
    case "ADD_TO_CART":
      
    // state = initialState --> (if you changed state, initial state will change, vice vera )
    // make a copy of state / not reference
      let productsCopy = [...state.products ];
      let productsIdArr = productsCopy.map(item=> item._id)

     //check if item id doesn't exists in cart, add it to cart
     if(!productsIdArr.includes(action.payload._id))
      productsCopy.push(action.payload);

      return {
      products:productsCopy,
      cartCount: productsCopy.length
     }
    
     case "DELETE_FROM_CART":
      let productCopy = [...state.products ];
      //filter from cart deleted item
      let afterDelete = productCopy.filter(item => item._id !== action.payload._id)

      return {
        products:afterDelete,
        cartCount: afterDelete.length
       }

    default:
      return state;
  }

}

export default cartReducer;
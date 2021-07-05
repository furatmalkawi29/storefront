
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

      //to add item once to cart
     if(!productsCopy.includes(action.payload))
      productsCopy.push(action.payload);
      
     return {
      products:productsCopy,
      cartCount: productsCopy.length

     }
        
    default:
      return state;
  }

}

export default cartReducer;
import axios from "axios"

 export function addToCart(updatedItem) {
  return {
    type: "ADD_TO_CART",
    payload:updatedItem
  }
}


export function deleteFromCart(updatedItem) {
  console.log(updatedItem);
 return {
   type: "DELETE_FROM_CART",
   payload:updatedItem
 }
}



export function addApiProducts(prodArr, addedItem) {
 return async (dispatch)=>{
   let idArr = prodArr.map(item=>item._id)

   //if item already in cart don't add
   if(!idArr.includes(addedItem._id)){
let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${addedItem._id}`,{inStock: addedItem.inStock -1});
let updatedItem = response.data;
dispatch(addToCart(updatedItem))
   }else {
    dispatch(addToCart(addedItem))
   }

 }
}


export function deleteApiProducts(addedItem) {
  return async (dispatch)=>{
 let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${addedItem._id}`,{inStock: addedItem.inStock +1});
 let updatedItem = response.data;
 dispatch(deleteFromCart(updatedItem))
  }
 }
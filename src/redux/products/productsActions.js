import axios from 'axios'

//api action creators
export function getProducts(data) {
 return {
   type: "GET_PRODUCTS_LIST",
   payload: data
 }
}




//async action creator
export function fetchApiProducts() {
 return async (dispatch) => {

   let response = await axios.get("https://api-js401.herokuapp.com/api/v1/products");

   let data = await response.data.results;

   dispatch(getProducts(data));
 }
}
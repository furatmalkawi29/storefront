import axios from 'axios'


 export function changeActive(categoryName) {
   console.log(categoryName);
  return {
    type: "ACTIVE_CATEGORY_CHANGED",
    payload: categoryName
  }
}

//api action creators
export function getCategories(data) {
  console.log(data);
 return {
   type: "GET_CATEGORIES_LIST",
   payload: data
 }
}




//async action creator
export function fetchApiCategories() {
 return async (dispatch) => {

   let response = await axios.get("https://api-js401.herokuapp.com/api/v1/categories");

   let data = await response.data.results;

   dispatch(getCategories(data));
 }
}

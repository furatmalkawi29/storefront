
let initialState = {
  productsList:[{name:"pizza 1", description:"veggie pizza", price:10, count:0, category:"food"},
  {name:"iphone 1", description:"iphone16", price:3000, count:0, category:"electronics"},
  {name:"pizza 2", description:"veggie pizza", price:10, count:0, category:"food"},
  {name:"iphone 2", description:"iphone16", price:3000, count:0, category:"electronics"},
  {name:"pizza 3", description:"veggie pizza", price:10, count:0, category:"food"},
  {name:"iphone 3", description:"iphone16", price:3000, count:0, category:"electronics"}] ,
  activeCategory: ""
 }
 
 function productReducer(state = initialState,action) {
 
   switch (action.type) {
     case "ACTIVE_CATEGORY_CHANGED":
      return {
       ...state,
       productsList:initialState.productsList.filter(item=> item["category"]===action.payload)
      }
         
     default:
       return state;
   }
 }
 
 export default productReducer;
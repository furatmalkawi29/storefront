
let initialState = {
 categoriesList:[] ,
 activeCategory: false
}

function categoriesReducer(state = initialState,action) {

  switch (action.type) {
    case "ACTIVE_CATEGORY_CHANGED":
     return {
      ...state,
      activeCategory:action.payload
     }

     case "GET_CATEGORIES_LIST":
       return {
         ...state,
         categoriesList: action.payload
       }
        
    default:
      return state;
  }

}

export default categoriesReducer;
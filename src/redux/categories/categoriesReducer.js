
let initialState = {
 categoriesList:[{name:"food", display:"Food", description:"food shopping"},
 {name:"electronics", display:"Electronics", description:"electronics shopping"}] ,
 activeCategory: false
}

function categoriesReducer(state = initialState,action) {

  switch (action.type) {
    case "ACTIVE_CATEGORY_CHANGED":
     return {
      ...state,
      activeCategory:action.payload
     }
        
    default:
      return state;
  }

}

export default categoriesReducer;
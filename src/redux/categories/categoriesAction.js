

 function changeActive(categoryName) {
   console.log(categoryName);
  return {
    type: "ACTIVE_CATEGORY_CHANGED",
    payload: categoryName
  }
}

export default changeActive
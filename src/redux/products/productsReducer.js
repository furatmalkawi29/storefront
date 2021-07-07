let foodImg = ["https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg", "https://1.bp.blogspot.com/-XRx7bijM3qw/X5LCcqDpHvI/AAAAAAACr-o/szKKm80K3xIYG_P6nSvfKHo4umuQrvJCQCLcBGAsYHQ/s1417/DSC07286-001.jpg","https://static.toiimg.com/thumb/60258570.cms?imgsize=778749&width=800&height=800"]

let electImage = ["https://www.cnet.com/a/img/AXP9ShNeb1zz_QwPqtZf1-JY15k=/1200x630/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg", "https://www.apple.com/newsroom/images/product/os/watchos/standard/Apple-watch-watchos7_06222020_LP_hero.jpg.og.jpg", "https://icdn.digitaltrends.com/image/digitaltrends/apple-pencil-2-2.jpg"]

let initialState = {
  productsList:[] ,
 }


 
 function productReducer(state = initialState,action) {
 
   switch (action.type) {

    case "GET_PRODUCTS_LIST":
      initialState.productsList = action.payload;
      return state;

     case "ACTIVE_CATEGORY_CHANGED":
       //get matching products to category and has stock count bigger than zero
       let categoryItems = initialState.productsList.filter(item=> item["category"]===action.payload && item["inStock"]>0);
      
       //add temporary static image /food/electronics
       categoryItems.map(item=>{
         action.payload ==="food"? item.image= foodImg[0] : item.image= electImage[0] 
         return item 
       })

       return {
       productsList:categoryItems
      }
     
      case "ADD_TO_CART":
       let productListCopy = [...state.productsList].map(item => {
         //update state with new inStock value
         //why? async action will keep update with old value -1
          if(item._id === action.payload._id)
          item.inStock = action.payload.inStock
          return item
        })
        //filter out items that has stock count bigger than 0
        let filteredList =productListCopy.filter(item=> item.inStock>0)

        return {
          productsList: filteredList
        }
     default:
       return state;
   }
 }
 
 export default productReducer;
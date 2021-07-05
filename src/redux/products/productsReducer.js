let foodImg = ["https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg", "https://1.bp.blogspot.com/-XRx7bijM3qw/X5LCcqDpHvI/AAAAAAACr-o/szKKm80K3xIYG_P6nSvfKHo4umuQrvJCQCLcBGAsYHQ/s1417/DSC07286-001.jpg","https://static.toiimg.com/thumb/60258570.cms?imgsize=778749&width=800&height=800"]

let electImage = ["https://www.cnet.com/a/img/AXP9ShNeb1zz_QwPqtZf1-JY15k=/1200x630/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg", "https://www.apple.com/newsroom/images/product/os/watchos/standard/Apple-watch-watchos7_06222020_LP_hero.jpg.og.jpg", "https://icdn.digitaltrends.com/image/digitaltrends/apple-pencil-2-2.jpg"]

let initialState = {
  productsList:[{name:"Caramelo", description:"dessert", price:10, stockCount:10, category:"food", image:foodImg[0]},
  {name:"Apple pen", description:"pen", price:3000, stockCount:10, category:"electronics", image:electImage[2]},
  {name:"Italian Pizza", description:"main course", price:10, stockCount:10, category:"food", image:foodImg[1]},
  {name:"Apple watch", description:"watch", price:3000, stockCount:10, category:"electronics", image:electImage[1]},
  {name:"Lemonade", description:"drink", price:10, stockCount:10, category:"food", image: foodImg[2]},
  {name:"Iphone12 Pro", description:"phone", price:3000, stockCount:10, category:"electronics", image:electImage[0] }] ,
 }
 
 function productReducer(state = initialState,action) {
 
   switch (action.type) {
     case "ACTIVE_CATEGORY_CHANGED":
      return {
        //items that belong to active category and has stock count bigger than zero
       productsList:initialState.productsList.filter(item=> item["category"]===action.payload && item["stockCount"]>0)
      }
     
      case "ADD_TO_CART":
        let productListCopy = [...state.productsList]

        //decrease stock count bt 1
        let updatedList = productListCopy.map(item => {
          if(item.name===action.payload.name)
            item.stockCount = item.stockCount -1
            return item;
          });
        
        //filter out items that has stock count bigger than 0
        let filteredList =updatedList.filter(item=> item.stockCount>0)


        return {
          productsList: filteredList
        }

     default:
       return state;
   }
 }
 
 export default productReducer;
import React from 'react'
import { connect } from 'react-redux'
import changeActive from '../../redux/categories/categoriesAction'
import addToCart from '../../redux/cart/cartAction'
import {If,Then} from 'react-if'
import Card from '../material/card'
import Button from '@material-ui/core/Button';

export const Products = (props) => {
  return (
    <React.Fragment>
      <If condition={props.activeCategory}>
          <Then>
          

    <div style={{ display: 'flex' , justifyContent:"space-around" }}>
   {props.productsList.map(item =>{
     return (
      <Card  key={item.name} image={item.image} name={item.name}>
         <Button onClick={()=>{
           console.log(item);
           props.addToCart(item)}} size="small" color="primary">
          ADD TO CART
        </Button>
        <Button size="small" color="primary">
          VIEW DETAILS
        </Button>
      </Card>
       );
      })}
     </div>
      </Then>
      </If>
 </React.Fragment>
  )
}



const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
  productsList: state.products.productsList,
  products:state.cart.products,
  cartCount:state.cart.cartCount
  
})

const mapDispatchToProps = {
  changeActive,addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

import React from 'react'
import Products from '../products/products'
import Categories from '../categories/categories'
import SimpleCart from '../simpleCart/simpleCart'
import {Switch , Route} from 'react-router-dom'
import ProductDetails from '../../pages/ProductDetails'
import ShoppingCart from '../../pages/ShoppingCart'
function Main() {
  return (
    <React.Fragment>

      <Switch>

      <Route exact path="/">
      <div style={{margin:10, borderBottom:"2px solid gray", display:"flex", justifyContent:"space-between"}}>
      <Categories/>
      <SimpleCart/>
      </div>
      <Products/>
      </Route>

      <Route path="/products/:id">
      <ProductDetails/>
      </Route>

      <Route exact path="/cart">
      <ShoppingCart/>
      </Route>

      </Switch>
    </React.Fragment>
  )
}

export default Main

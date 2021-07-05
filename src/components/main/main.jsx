import React from 'react'
import Products from '../products/products'
import Categories from '../categories/categories'
import SimpleCart from '../simpleCart/simpleCart'
function Main() {
  return (
    <React.Fragment>
      <div style={{margin:10, borderBottom:"2px solid gray", display:"flex", justifyContent:"space-between"}}>
      <Categories/>
      <SimpleCart/>
      </div>

     <Products/>
    </React.Fragment>
  )
}

export default Main

import React from 'react'
import { connect } from 'react-redux'
import changeActive from '../../redux/categories/categoriesAction'

export const Products = (props) => {
  return (
    <React.Fragment>
    <ul>
   {props.productsList.map(item =>{
     return (
       <li key={item.name}> {item.name} | {item.price} | {item.description}</li>
       );
     })}
     </ul>
 </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
  productsList: state.products.productsList
  
})

const mapDispatchToProps = {
  changeActive
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

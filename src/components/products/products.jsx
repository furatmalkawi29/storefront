import React from 'react'
import { connect } from 'react-redux'
import changeActive from '../../redux/categories/categoriesAction'
import {If,Then} from 'react-if'
import Card from '../material/card'

export const Products = (props) => {
  return (
    <React.Fragment>
      <If condition={props.activeCategory}>
          <Then>
          

    <div style={{ display: 'flex' , justifyContent:"space-around" }}>
   {props.productsList.map(item =>{
     return (
      <Card  key={item.name} image={item.image} name={item.name} />

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
  productsList: state.products.productsList
  
})

const mapDispatchToProps = {
  changeActive
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

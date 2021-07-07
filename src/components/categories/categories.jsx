import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {changeActive, fetchApiCategories} from '../../redux/categories/categoriesAction'
import {fetchApiProducts} from '../../redux/products/productsActions'
import Tabs from '../material/tab'
import Tab from '@material-ui/core/Tab';

export const Categories = (props) => {

  //to get categories from api at initial-mount
  useEffect(props.fetchApiCategories, []);
  
  //to get products from api at initial-mount
  useEffect(props.fetchApiProducts, [props.activeCategory]);

 



  return (
    <React.Fragment>
      <div>
      <Tabs style={{display:"flex"}}>
      {props.categoriesList.map(item =>{
        return (
          <Tab key={item._id} label={item.name} onClick={()=>{
            props.changeActive(item.name)}} />
            );
          })}
          </Tabs>
        
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
 categoriesList: state.categories.categoriesList
})

const mapDispatchToProps = {
  changeActive,
  fetchApiCategories,
  fetchApiProducts
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)

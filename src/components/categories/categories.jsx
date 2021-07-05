import React from 'react'
import { connect } from 'react-redux'
import changeActive from '../../redux/categories/categoriesAction'
import Tabs from '../material/tab'
import Tab from '@material-ui/core/Tab';

export const Categories = (props) => {

  return (
    <React.Fragment>
      <div>
      {props.categoriesList.map(item =>{
        return (
          <Tabs style={{display:"flex"}}>
          <Tab key={item.name} label={item.display} onClick={()=>{
            props.changeActive(item.name)}} />
            </Tabs>
          );
          })}
        
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
 categoriesList: state.categories.categoriesList
})

const mapDispatchToProps = {
  changeActive
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)

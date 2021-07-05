import React from 'react'
import { connect } from 'react-redux'
import changeActive from '../../redux/categories/categoriesAction'

export const Categories = (props) => {
  console.log("active category :" + props.activeCategory)
  
  return (
    <React.Fragment>
      <div>
      {props.categoriesList.map(item =>{
        return (
          <p onClick={()=>{props.changeActive(item.name)}} key={item.name}> | {item.display}</p>
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

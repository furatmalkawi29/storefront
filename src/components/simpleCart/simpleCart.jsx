import React from 'react'
import { connect } from 'react-redux'
import List from '../material/list'
import ListItem from '../material/list-item'
import { If, Then } from 'react-if'

export const SimpleCart = (props) => {
  console.log(props.products);
  return (
    <React.Fragment>
      <If condition={props.products.length}>
        <Then>
      <List>
        {props.products.map(item=><ListItem name={item.name}/>)
        }
      </List>
        </Then>
        </If>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  products:state.cart.products
})


export default connect(mapStateToProps)(SimpleCart)


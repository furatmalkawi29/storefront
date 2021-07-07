import React from 'react'
import { connect } from 'react-redux'
import {deleteApiProducts} from '../../redux/cart/cartAction'
import List from '../material/list'
import ListItem from '../material/list-item'
import { If, Then } from 'react-if'


export const SimpleCart = (props) => {
  return (
    <React.Fragment>
      <If condition={props.products.length}>
        <Then>
      <List>
        {props.products.map(item=><ListItem key={item._id} name={item.name}>
          <img style={{width:"12%", position: "absolute" , right:20, cursor:"pointer"}} alt="delete-icon" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-delete-icon.png" onClick={()=>{props.deleteApiProducts(item)}}/>
     </ListItem>)
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

const mapDispatchToProps = {
  deleteApiProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)


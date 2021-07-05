import React from 'react'
import AppBar from '../material/header-bar'
import {connect} from 'react-redux'

function Header(props) {
  return (
    <React.Fragment>
      <AppBar cartCount={props.cartCount} />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  cartCount: state.cart.cartCount
})

export default connect (mapStateToProps)(Header)

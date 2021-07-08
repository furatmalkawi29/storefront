import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/material/details-card'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    marginTop:"30%"
  },
});

export const ShoppingCart = (props) => {
  const classes = useStyles();
  let total =0;
  return (
    <div>
<Card>
<Typography>
  Order Summary
  {props.products.map(item=>{
    total=total+item.price;
    return (<div key={item._id}>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>);
  })}
        <p>TOTAL: {total}</p>
</Typography>

<Button className={classes.button} variant="contained" color="primary">
      BUY
    </Button>
</Card>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products:state.cart.products,
})


export default connect(mapStateToProps)(ShoppingCart)

import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/material/details-card'
import Accordion from '../components/material/accordion'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  placeholders: {
    display: 'flex',
    width:"40%",
    margin:"auto",
    '& > *': {
      margin: "auto",
      width: theme.spacing(36),
      height: theme.spacing(16),
    }, 
},
root: {
  width: '100%',
  maxWidth: 500,
},
heading:{
  textAlign:"center",
  margin:20
},
button:{
width:"40%",
margin:"2% 30%"
}
}));


export const ProductDetails = (props) => {
  const classes = useStyles();

  // hook to get certain param in url
  let { id } = useParams();
  let item= props.productsList.filter(item=> {
    return item._id===id
  });
  item=item[0]

  return (
    <React.Fragment>
     <Typography variant="h2" gutterBottom className={classes.heading}>
       {item?item.name:''}
      </Typography>


      <Card price={item?item.price:''} stock={item?item.inStock:''} image="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg">
      </Card>

      <Button className={classes.button} variant="contained" color="primary">
      BUY
    </Button>

      <Typography variant="h4" gutterBottom className={classes.heading}>
      Related Items
     </Typography>
     <div className={classes.placeholders}>
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
      <Paper variant="outlined" square />
      <Paper variant="outlined" square />

    </div>

     <Typography variant="h4" gutterBottom className={classes.heading}>
     Product Details
     </Typography>

     <Accordion/>

    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  productsList: state.products.productsList,
})


export default connect(mapStateToProps)(ProductDetails)

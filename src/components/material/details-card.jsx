import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 505,
    margin:"auto"
  },
  media: {
    height: 540,
  },
  price: {
    display:"flex",
    justifyContent:"space-around",
    padding:5,

  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
              {props.children}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <div className={classes.price}>
      <Typography variant="h6" gutterBottom>
      In Stock: {props.stock}
      </Typography>
      <Typography variant="h6" gutterBottom className={classes.price}>
      ${props.price}
      </Typography>
      </div>

    </Card>
  );
}
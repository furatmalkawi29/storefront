import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ProminentAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
     
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/cart">
            Cart({props.cartCount})
            </Link>
          </Typography>
        <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h3" noWrap>
            OUR STORE
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
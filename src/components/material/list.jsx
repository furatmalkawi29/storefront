import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight:'900',
    position:'fixed',
    right:0,
    zIndex:2,
    width: '100%',
    maxWidth: '27ch',
    backgroundColor: "rgba(230, 238, 255,.7)",
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  return ( <List className={classes.root}>
    {props.children}
    </List>
    );
  }

  
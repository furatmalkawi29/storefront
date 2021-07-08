import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'


export default function AlignItemsList(props) {

  return (
      <ListItem alignItems="flex-start">
        {props.children}
        <Link to={`/products/${props.id}`}>
        <ListItemText
          primary={props.name}
          />
          </Link>
      </ListItem>
      
  );
}
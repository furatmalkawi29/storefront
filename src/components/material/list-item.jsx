import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function AlignItemsList(props) {

  return (
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.name}
           />
      </ListItem>
      
  );
}
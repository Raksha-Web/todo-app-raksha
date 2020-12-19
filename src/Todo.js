import React from 'react';
import { List, Avatar, ListItemAvatar, ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
  return (
    <List class='todo_list'>
      <ListItemAvatar>
          <Avatar>            
          </Avatar>
        </ListItemAvatar>
      <ListItem>        
        <ListItemText primary={props.todo} secondary='By Ramesh' />
      </ListItem>
    </List>
  )
}

export default Todo

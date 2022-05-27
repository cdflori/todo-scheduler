import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

function Todo(props) {
  return (
    <div>
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary={'My deadline: '}/>
            </ListItem>
        </List>
      
    </div>
  )
}

export default Todo

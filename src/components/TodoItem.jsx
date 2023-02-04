import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({ todo, deleteTodo, editTodo, completeTodo }) {
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  const handleCheckbox = () => {
    completeTodo(todo.id);
  };

  return (
    <>
      <EditTodoDialog
        open={openDialog}
        dialogHandler={dialogHandler}
        todo={todo}
        editTodo={editTodo}
      />
      <Paper>
        <ListItem
          style={{ opacity: todo.completed ? '0.5' : '1' }}
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => setOpenDialog(true)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTodo(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                onClick={() => handleCheckbox()}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}

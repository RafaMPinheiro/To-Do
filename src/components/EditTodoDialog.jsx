import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TextField } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function EditTodoDialog({
  open,
  dialogHandler,
  todo,
  editTodo,
}) {
  const [editedText, setEditedText] = useState(todo.text)

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogHandler()
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Editando tarefa'}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setEditedText(e.target.value)}
            defaultValue={editedText}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

import React, { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'

export default function Form({ addTodo }) {
  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const createTodo = (text, id) => {
    const todoObj = { text: text, id: id }
    setId(id + 1)
    addTodo(todoObj)
    setText('')
  }

  return (
    <Paper style={{ padding: '1em' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
          fullWidth
        />
        <Button variant="text" onClick={() => createTodo(text, id)}>
          Add
        </Button>
      </div>
    </Paper>
  )
}

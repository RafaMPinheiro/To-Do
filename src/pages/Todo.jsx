import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import TodoItem from '../components/TodoItem';
import Form from '../components/Form';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    setTodos(JSON.parse(localTodos));
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id != id);
    setTodos(filtered);
    localStorage.setItem('todos', JSON.stringify(filtered));
  };

  const editTodo = (id, editedText) => {
    var todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].text = editedText;
      }
    }
    setTodos(todosArray);
    localStorage.setItem('todos', JSON.stringify(todosArray));
  };

  const completeTodo = (id) => {
    var todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].completed = !todosArray[i].completed;
      }
    }
    setTodos(todosArray);
    localStorage.setItem('todos', JSON.stringify(todosArray));
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: '1em' }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: '1em' }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: '1em' }}>
            <TodoItem
              editTodo={editTodo}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          </div>
        ))}
      </List>
    </Container>
  );
}

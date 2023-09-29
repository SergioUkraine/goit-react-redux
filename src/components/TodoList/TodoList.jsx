import React from 'react';
import ListItem from './ListItem';
import { List } from './TodoList.styled';

function TodoList({ todos, children, ...otherProps }) {
  if (!todos) return;
  return (
    <List>
      {children}
      {todos.map(todo => (
        <ListItem key={todo.id} item={todo} {...otherProps} />
      ))}
    </List>
  );
}

export default TodoList;

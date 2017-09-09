import * as React from 'react';
import { TodoItem } from './todo-item';

export const TodoList = ({ items, onCompleteChange }) => (
  <ul>
    {items.map((item, i) => (
      <TodoItem item={item} onCompleteChange={onCompleteChange(item)} key={i} />
    ))}
  </ul>
);

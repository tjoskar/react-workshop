import * as React from 'react';

export const TodoList = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

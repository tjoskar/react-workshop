import * as React from 'react';

const changeComplete = cb => e => cb(e.target.checked);

export const TodoItem = ({ item, onCompleteChange }) => (
  <li>
    {item.value} <input type="checkbox" onClick={changeComplete(onCompleteChange)} />
  </li>
);

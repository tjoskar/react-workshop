import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { spy } from 'simple-spy';
import { TodoForm } from '../todo-form';

test('Render form', () => {
  const tree = shallow(
    <TodoForm />
  );

  expect(toJson(tree)).toMatchSnapshot();
});

test('Return the state value on save', () => {
  // Arrange
  const newItem = spy(() => null);
  const tree = shallow(
    <TodoForm newItem={newItem} />
  );
  tree.setState({ text: 'Winter is coming' });
  const submitEvent = {
    preventDefault: spy(() => null)
  }

  // Act
  tree.find('form').simulate('submit', submitEvent);

  // Assert
  expect(newItem.callCount).toBe(1);
  expect(newItem.args[0][0]).toBe('Winter is coming');
  expect(submitEvent.preventDefault.callCount).toBe(1);
});

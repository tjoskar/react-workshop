import * as React from 'react';
import { TodoForm } from './todo-form';
import { TodoList } from './todo-list';

export class TodoApp extends React.Component {

  state = { items: [] }

  handleNewItem = newValue => {
    this.setState(prevState => ({
      items: prevState.items.concat({
        value: newValue,
        complete: false
      })
    }));
  }

  onCompleteChange = item => complete => {
    this.setState(({ items }) => {
      const index = items.indexOf(item);
      items[index] = Object.assign({}, item, { complete });
      return { items: Array.from(items) };
    });
  }

  printState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} onCompleteChange={this.onCompleteChange} />
        <TodoForm newItem={this.handleNewItem}></TodoForm>
        <button onClick={this.printState}>Print state</button>
      </div>
    );
  }

}

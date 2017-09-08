import * as React from "react";
import { TodoForm } from './todo-form';
import { TodoList } from './todo-list';

export class TodoApp extends React.Component {

  state = { items: [] }

  handleNewItem = newValue => {
    this.setState(prevState => ({
      items: prevState.items.concat(newValue)
    }));
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <TodoForm newItem={this.handleNewItem}></TodoForm>
      </div>
    );
  }

}

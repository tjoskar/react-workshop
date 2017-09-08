import * as React from 'react';

export class TodoForm extends React.Component {
    
  state = { text: '' };

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.newItem(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.text} />
        <button>Add item</button>
      </form>
    );
  }

}

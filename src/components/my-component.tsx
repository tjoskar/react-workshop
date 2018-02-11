import * as React from 'react'

type MyComponentState = {
  inputValue: string
}

function MyInput(props: { inputValue: string; onChange: (value: string) => void }) {
  return (
    <input
      value={props.inputValue}
      onChange={event => props.onChange(event.target.value)}
    />
  )
}

function MyButton() {
  return <button onClick={() => console.log('Clicking me!')}>Click Me!</button>
}

function MyText(props: { text: string }) {
  return <p>{props.text}</p>
}

export class MyComponent extends React.Component<any, MyComponentState> {
  state = {
    inputValue: ''
  }

  updateState = value => {
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
      <div>
        <MyInput inputValue={''} onChange={this.updateState} />
        <MyButton />
        <MyText text={'Some text'} />
      </div>
    )
  }
}
